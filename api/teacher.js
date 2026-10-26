// 선생님 페이지용: POST /api/teacher  { action: 'classes' | 'records' | 'clear', cls: '2-3' }
// 헤더 x-teacher-pass 에 비밀번호(버셀 환경변수 TEACHER_PASSWORD)
import { cmd, pipe, hasRedis, send, body, classKey, CLASSES, CONFIG } from './_store.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST만 가능해요.' });
  try {
    const want = process.env.TEACHER_PASSWORD || (hasRedis ? '' : '1234');
    if (!want) return send(res, 500, { error: '버셀 환경변수 TEACHER_PASSWORD(선생님 비밀번호)를 먼저 설정해 주세요.' });
    let got = req.headers['x-teacher-pass'] || '';
    try { got = decodeURIComponent(got); } catch {}
    if (got !== want) return send(res, 403, { error: '선생님 비밀번호가 맞지 않아요.' });

    const b = await body(req);
    const sortCls = (a, b) => { const [ga, ca] = a.split('-').map(Number), [gb, cb] = b.split('-').map(Number); return ga - gb || ca - cb; };
    if (b.action === 'classes') {
      const list = (await cmd('SMEMBERS', CLASSES) || []).filter(x => /^\d+-\d+$/.test(x)).sort(sortCls);
      return send(res, 200, { classes: list });
    }
    if (b.action === 'setEras') {
      const off = Array.isArray(b.disabled) ? b.disabled.map(String).filter(x => /^[a-z]{2,20}$/.test(x)).slice(0, 50) : [];
      await cmd('SET', CONFIG, JSON.stringify({ disabled: off, t: Date.now() }));
      return send(res, 200, { ok: true, disabled: off });
    }
    const m = /^(\d+)-(\d+)$/.exec(String(b.cls || ''));
    if (!m) return send(res, 400, { error: '반을 골라 주세요.' });
    const key = classKey(m[1], m[2]);
    if (b.action === 'records') {
      const raw = await cmd('LRANGE', key, 0, -1) || [];
      const records = raw.map(x => { try { return JSON.parse(x); } catch { return null; } }).filter(Boolean);
      return send(res, 200, { records });
    }
    if (b.action === 'clear') {
      await pipe([['DEL', key], ['SREM', CLASSES, `${m[1]}-${m[2]}`]]);
      return send(res, 200, { ok: true });
    }
    send(res, 400, { error: '알 수 없는 요청이에요.' });
  } catch (e) {
    send(res, 500, { error: e.message || '오류가 났어요.' });
  }
}
