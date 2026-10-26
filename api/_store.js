// Upstash Redis(REST) 연결. 환경변수가 없으면 메모리 저장소로 동작(로컬 테스트용).
const URL_ = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || '';
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || '';
export const hasRedis = !!(URL_ && TOKEN);

export async function pipe(cmds) {
  if (!hasRedis) return cmds.map(memCmd);
  const r = await fetch(URL_.replace(/\/$/, '') + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds.map(c => c.map(String))),
  });
  if (!r.ok) throw new Error('저장소 연결 오류 (' + r.status + ')');
  const out = await r.json();
  return out.map(o => {
    if (o.error) throw new Error('저장소 오류: ' + o.error);
    return o.result;
  });
}
export const cmd = async (...args) => (await pipe([args]))[0];

// ---------- 메모리 저장소 (Upstash 응답 모양을 흉내냄) ----------
const mem = globalThis.__artMem || (globalThis.__artMem = new Map());
function memCmd([c, ...a]) {
  a = a.map(String);
  const k = a[0];
  switch (String(c).toUpperCase()) {
    case 'GET': return mem.has(k) ? mem.get(k) : null;
    case 'SET': mem.set(k, a[1]); return 'OK';
    case 'RPUSH': { let l = mem.get(k); if (!l) mem.set(k, (l = [])); l.push(...a.slice(1)); return l.length; }
    case 'LRANGE': { const l = mem.get(k) || []; const e = Number(a[2]) < 0 ? l.length : Number(a[2]) + 1; return l.slice(Number(a[1]), e); }
    case 'SADD': { let s = mem.get(k); if (!s) mem.set(k, (s = new Set())); let n = 0; for (const x of a.slice(1)) if (!s.has(x)) { s.add(x); n++; } return n; }
    case 'SMEMBERS': return [...(mem.get(k) || [])];
    case 'SREM': { const s = mem.get(k); let n = 0; if (s) for (const x of a.slice(1)) if (s.delete(x)) n++; return n; }
    case 'DEL': { let n = 0; for (const x of a) if (mem.delete(x)) n++; return n; }
    default: throw new Error('mock: 지원하지 않는 명령 ' + c);
  }
}

export function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}
export async function body(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  let s = ''; for await (const ch of req) s += ch;
  try { return JSON.parse(s || '{}'); } catch { return {}; }
}
export const classKey = (g, c) => `art:rec:${g}-${c}`;
export const CLASSES = 'art:classes';
export const CONFIG = 'art:config';
