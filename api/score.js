// 학생 게임 결과 저장: POST /api/score
import { cmd, pipe, send, body, classKey, CLASSES } from './_store.js';

const int = (v, lo, hi) => { const n = Math.floor(Number(v)); return Number.isFinite(n) && n >= lo && n <= hi ? n : null; };

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST만 가능해요.' });
  try {
    const b = await body(req);
    const g = int(b.grade, 1, 6), c = int(b.cls, 1, 20), n = int(b.num, 1, 60);
    const name = String(b.name || '').trim().slice(0, 12);
    if (!g || !c || !n || !name) return send(res, 400, { error: '학년·반·번호·이름을 확인해 주세요.' });
    const mode = b.mode === 'attack' ? 'attack' : 'quiz';
    const rec = {
      g, c, n, name, mode,
      range: ['all', 'old', 'new'].includes(b.range) ? b.range : 'all',
      diff: b.diff === 'hard' ? 'hard' : 'easy',
      count: mode === 'quiz' ? int(b.count, 1, 100) : null,
      score: int(b.score, 0, 100000) ?? 0,
      correct: int(b.correct, 0, 1000) ?? 0,
      answered: int(b.answered, 0, 1000) ?? 0,
      streak: int(b.streak, 0, 1000) ?? 0,
      t: Date.now(),
    };
    if (rec.correct > rec.answered) rec.correct = rec.answered;
    await pipe([['RPUSH', classKey(g, c), JSON.stringify(rec)], ['SADD', CLASSES, `${g}-${c}`]]);
    send(res, 200, { ok: true });
  } catch (e) {
    send(res, 500, { error: e.message || '저장하지 못했어요.' });
  }
}
