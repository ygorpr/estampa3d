/**
 * Robô do YouTube do Wine Know – Dark Divino (Google Apps Script), versão 2.
 * Sobe vídeo, coloca a thumbnail e agenda no canal Wine Know (conta de marca),
 * usando um cliente OAuth próprio (Google Cloud). O Apps Script roda na conta pessoal,
 * mas age no canal escolhido no login (/exec?conectar=1).
 *
 * Propriedades do script (Configurações do projeto > Propriedades do script):
 *   CLIENT_ID, CLIENT_SECRET  (do Google Cloud; nunca no código nem no chat)
 *
 * Segurança: só aceita arquivos do repositório do canal no GitHub e só mexe em vídeos do canal conectado.
 *
 * Ações (POST com JSON): listar | thumb {videoId, thumbUrl} | subir {videoUrl, thumbUrl, titulo, descricao, tags, publishAt}
 */
const ORIGEM = 'https://raw.githubusercontent.com/ygorpr/estampa3d/';
const API = 'https://www.googleapis.com/youtube/v3/';
const UP = 'https://www.googleapis.com/upload/youtube/v3/';
const ESCOPO = 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.upload';
const P = PropertiesService.getScriptProperties();

function exec_() { return ScriptApp.getService().getUrl(); }

function doGet(e) {
  const q = (e && e.parameter) || {};
  if (q.code) {
    const r = JSON.parse(UrlFetchApp.fetch('https://oauth2.googleapis.com/token', { method: 'post', payload: {
      code: q.code, client_id: P.getProperty('CLIENT_ID'), client_secret: P.getProperty('CLIENT_SECRET'),
      redirect_uri: exec_(), grant_type: 'authorization_code' } }).getContentText());
    if (!r.refresh_token) return html_('Faltou o refresh_token. Abra de novo o link ?conectar=1.');
    P.setProperty('REFRESH_TOKEN', r.refresh_token);
    CacheService.getScriptCache().remove('tok');
    return html_('Pronto! Robô conectado ao canal: <b>' + canal_().snippet.title + '</b>. Pode fechar esta página.');
  }
  if (q.conectar) {
    const url = 'https://accounts.google.com/o/oauth2/v2/auth?' + [
      'client_id=' + encodeURIComponent(P.getProperty('CLIENT_ID')),
      'redirect_uri=' + encodeURIComponent(exec_()),
      'response_type=code', 'access_type=offline', 'prompt=consent', 'scope=' + encodeURIComponent(ESCOPO)].join('&');
    return html_('<a href="' + url + '" target="_top" style="font-size:28px">Toque aqui para conectar o canal Wine Know</a>');
  }
  if (!P.getProperty('REFRESH_TOKEN')) return out({ ok: false, erro: 'robo nao conectado' });
  return out({ ok: true, robo: 'wine-know', canal: canal_().snippet.title });
}

function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents);
    if (p.acao === 'listar') return out({ ok: true, canal: canal_().snippet.title, videos: listar_(p.max || 25) });
    if (p.acao === 'thumb') { checaUrl_(p.thumbUrl); doCanal_(p.videoId); thumb_(p.videoId, p.thumbUrl); return out({ ok: true }); }
    if (p.acao === 'subir') {
      checaUrl_(p.videoUrl); if (p.thumbUrl) checaUrl_(p.thumbUrl);
      const meta = { snippet: { title: p.titulo, description: p.descricao || '', tags: p.tags || [], categoryId: p.categoria || '22',
                                defaultLanguage: 'pt-BR', defaultAudioLanguage: 'pt-BR' },
                     status: { privacyStatus: 'private', publishAt: p.publishAt, selfDeclaredMadeForKids: false } };
      const video = UrlFetchApp.fetch(p.videoUrl).getBlob();
      const b = 'robo' + Date.now();
      const corpo = [].concat(
        Utilities.newBlob('--' + b + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify(meta) +
                          '\r\n--' + b + '\r\nContent-Type: video/mp4\r\n\r\n').getBytes(),
        video.getBytes(), Utilities.newBlob('\r\n--' + b + '--').getBytes());
      const v = api_(UP + 'videos?uploadType=multipart&part=snippet,status',
                     { method: 'post', contentType: 'multipart/related; boundary=' + b, payload: corpo });
      let thumbOk = null;
      if (p.thumbUrl) { try { thumb_(v.id, p.thumbUrl); thumbOk = true; } catch (err) { thumbOk = String(err); } }
      return out({ ok: true, id: v.id, url: 'https://youtu.be/' + v.id, thumb: thumbOk });
    }
    return out({ ok: false, erro: 'acao desconhecida' });
  } catch (err) { return out({ ok: false, erro: String(err) }); }
}

function token_() {
  const c = CacheService.getScriptCache(); const t = c.get('tok'); if (t) return t;
  const r = JSON.parse(UrlFetchApp.fetch('https://oauth2.googleapis.com/token', { method: 'post', payload: {
    client_id: P.getProperty('CLIENT_ID'), client_secret: P.getProperty('CLIENT_SECRET'),
    refresh_token: P.getProperty('REFRESH_TOKEN'), grant_type: 'refresh_token' } }).getContentText());
  c.put('tok', r.access_token, 3000); return r.access_token;
}
function api_(url, opt) {
  opt = opt || {}; opt.headers = { Authorization: 'Bearer ' + token_() }; opt.muteHttpExceptions = true;
  const r = UrlFetchApp.fetch(url, opt); const txt = r.getContentText();
  if (r.getResponseCode() >= 300) throw new Error(r.getResponseCode() + ' ' + txt.slice(0, 400));
  return txt ? JSON.parse(txt) : {};
}
function checaUrl_(u) { if (!u || u.indexOf(ORIGEM) !== 0) throw new Error('arquivo fora do repositório do canal'); }
function canal_() { return api_(API + 'channels?part=snippet,contentDetails&mine=true').items[0]; }
function doCanal_(id) {
  const it = api_(API + 'videos?part=snippet&id=' + id).items;
  if (!it.length || it[0].snippet.channelId !== canal_().id) throw new Error('vídeo não é do canal');
}
function thumb_(id, url) {
  api_(UP + 'thumbnails/set?videoId=' + id, { method: 'post', contentType: 'image/jpeg',
       payload: UrlFetchApp.fetch(url).getBlob().getBytes() });
}
function listar_(max) {
  const up = canal_().contentDetails.relatedPlaylists.uploads;
  const ids = api_(API + 'playlistItems?part=contentDetails&maxResults=' + Math.min(max, 50) + '&playlistId=' + up)
    .items.map(i => i.contentDetails.videoId);
  if (!ids.length) return [];
  return api_(API + 'videos?part=snippet,status&id=' + ids.join(',')).items.map(v => ({
    id: v.id, titulo: v.snippet.title, status: v.status.privacyStatus, publishAt: v.status.publishAt || null }));
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function html_(s) { return HtmlService.createHtmlOutput('<div style="font-family:sans-serif;padding:24px;font-size:22px">' + s + '</div>'); }

/** Rode UMA vez pelo editor (Executar) para liberar o acesso à internet do script. */
function autorizar() { UrlFetchApp.fetch('https://www.google.com'); Logger.log('ok'); }
