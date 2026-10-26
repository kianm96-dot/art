// data.js의 작품 목록을 보고 위키백과에서 그림을 받아 img/ 폴더에 저장한다.
// 이미 받은 그림은 건너뛴다. (전부 다시 받으려면: node scripts/fetch-images.mjs --all)
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const IMG = path.join(ROOT, 'img');
const MANIFEST = path.join(IMG, 'manifest.json');
const ALL = process.argv.includes('--all');
const UA = 'ArtHistoryQuiz/1.0 (classroom game; https://github.com/kianm96-dot/art)';
const API = 'https://en.wikipedia.org/w/api.php';

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8'), ctx);
const ERAS = ctx.window.ERAS;

fs.mkdirSync(IMG, { recursive: true });
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
manifest.images = manifest.images || {};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function api(params) {
  const p = new URLSearchParams({ action: 'query', format: 'json', prop: 'pageimages',
    piprop: 'thumbnail|name', pithumbsize: '1200', ...params });
  for (let t = 0; t < 3; t++) {
    try {
      const r = await fetch(`${API}?${p}`, { headers: { 'User-Agent': UA } });
      if (r.ok) {
        const j = await r.json();
        const pages = Object.values(j.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
        for (const pg of pages) if (pg.thumbnail?.source) return { url: pg.thumbnail.source, page: pg.title, file: pg.pageimage };
        return null;
      }
    } catch (e) {}
    await sleep(1500);
  }
  return null;
}

async function download(url, dest) {
  for (let t = 0; t < 3; t++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } });
      if (r.ok) { fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer())); return true; }
    } catch (e) {}
    await sleep(2000);
  }
  return false;
}

const keep = new Set();
const failed = [];
for (const era of ERAS) {
  for (let j = 0; j < era.works.length; j++) {
    const w = era.works[j];
    const id = `${era.id}-${j}`;
    keep.add(id);
    const prev = manifest.images[id];
    if (!ALL && prev && prev.w === (w.w || null) && prev.q === (w.q || null) && fs.existsSync(path.join(IMG, prev.file))) continue;

    let hit = w.w ? await api({ titles: w.w, redirects: '1' }) : null;
    if (!hit) hit = await api({ generator: 'search', gsrsearch: w.q || `${w.w} painting`, gsrlimit: '1', gsrnamespace: '0' });
    if (!hit) { failed.push(`${id} ${w.a} 〈${w.t}〉`); delete manifest.images[id]; continue; }

    const ext = (hit.url.match(/\.(jpe?g|png|gif|webp)(?:$|\?)/i)?.[1] || 'jpg').toLowerCase().replace('jpeg', 'jpg');
    const file = `${id}.${ext}`;
    if (await download(hit.url, path.join(IMG, file))) {
      if (prev && prev.file !== file) fs.rmSync(path.join(IMG, prev.file), { force: true });
      manifest.images[id] = { file, w: w.w || null, q: w.q || null, page: hit.page,
        source: `https://commons.wikimedia.org/wiki/File:${hit.file}` };
      console.log(`OK   ${id}  ${w.t}  <- ${hit.page}`);
    } else { failed.push(`${id} ${w.a} 〈${w.t}〉 (다운로드 실패)`); }
    await sleep(400);
  }
}
for (const id of Object.keys(manifest.images)) if (!keep.has(id)) {
  fs.rmSync(path.join(IMG, manifest.images[id].file), { force: true });
  delete manifest.images[id];
}
manifest.failed = failed;
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
console.log(`\n총 ${Object.keys(manifest.images).length}점 저장, 실패 ${failed.length}점`);
failed.forEach(f => console.log('FAIL ' + f));
