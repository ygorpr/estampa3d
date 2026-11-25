/**
 * Robô do YouTube do Wine Know – Dark Divino (Google Apps Script).
 * Sobe vídeo, coloca a thumbnail e agenda, sem precisar do Studio.
 *
 * Segurança: só aceita arquivos do repositório do canal no GitHub e só mexe
 * em vídeos do próprio canal. O link do robô fica guardado só no ambiente do Claude.
 *
 * Ações (POST com JSON):
 *  {acao:"listar"}                                   -> últimos vídeos do canal (id, título, status, publishAt)
 *  {acao:"thumb", videoId, thumbUrl}                 -> troca a thumbnail
 *  {acao:"subir", videoUrl, thumbUrl, titulo, descricao, tags, publishAt, categoria}
 *                                                    -> sobe privado, agenda e põe a thumb
 */
const ORIGEM = 'https://raw.githubusercontent.com/ygorpr/estampa3d/';

function doGet() { return out({ ok: true, robo: 'wine-know', canal: canal_().snippet.title }); }

function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents);
    if (p.acao === 'listar') return out({ ok: true, videos: listar_(p.max || 25) });
    if (p.acao === 'thumb') { checaUrl_(p.thumbUrl); doCanal_(p.videoId); thumb_(p.videoId, p.thumbUrl); return out({ ok: true }); }
    if (p.acao === 'subir') {
      checaUrl_(p.videoUrl); if (p.thumbUrl) checaUrl_(p.thumbUrl);
      const blob = UrlFetchApp.fetch(p.videoUrl).getBlob().setContentType('video/mp4');
      const v = YouTube.Videos.insert({
        snippet: { title: p.titulo, description: p.descricao || '', tags: p.tags || [], categoryId: p.categoria || '22',
                   defaultLanguage: 'pt-BR', defaultAudioLanguage: 'pt-BR' },
        status: { privacyStatus: 'private', publishAt: p.publishAt, selfDeclaredMadeForKids: false }
      }, 'snippet,status', blob);
      let thumbOk = null;
      if (p.thumbUrl) { try { thumb_(v.id, p.thumbUrl); thumbOk = true; } catch (err) { thumbOk = String(err); } }
      return out({ ok: true, id: v.id, url: 'https://youtu.be/' + v.id, thumb: thumbOk });
    }
    return out({ ok: false, erro: 'acao desconhecida' });
  } catch (err) { return out({ ok: false, erro: String(err) }); }
}

function checaUrl_(u) { if (!u || u.indexOf(ORIGEM) !== 0) throw new Error('arquivo fora do repositório do canal'); }
function canal_() { return YouTube.Channels.list('snippet,contentDetails', { mine: true }).items[0]; }
function doCanal_(id) {
  const it = YouTube.Videos.list('snippet', { id: id }).items;
  if (!it.length || it[0].snippet.channelId !== canal_().id) throw new Error('vídeo não é do canal');
}
function thumb_(id, url) { YouTube.Thumbnails.set(id, UrlFetchApp.fetch(url).getBlob().setContentType('image/jpeg')); }
function listar_(max) {
  const up = canal_().contentDetails.relatedPlaylists.uploads;
  const ids = YouTube.PlaylistItems.list('contentDetails', { playlistId: up, maxResults: Math.min(max, 50) })
    .items.map(i => i.contentDetails.videoId);
  if (!ids.length) return [];
  return YouTube.Videos.list('snippet,status', { id: ids.join(',') }).items.map(v => ({
    id: v.id, titulo: v.snippet.title, status: v.status.privacyStatus, publishAt: v.status.publishAt || null }));
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/** Rode esta função UMA vez pelo editor (botão Executar) para autorizar. */
function autorizar() { Logger.log(canal_().snippet.title); }
