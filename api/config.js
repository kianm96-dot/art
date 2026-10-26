// 게임 설정(선생님이 끈 양식 목록): GET /api/config
import { cmd, send, CONFIG } from './_store.js';

export default async function handler(req, res) {
  try {
    const raw = await cmd('GET', CONFIG);
    let c = {}; try { c = JSON.parse(raw || '{}') || {}; } catch {}
    send(res, 200, { disabled: Array.isArray(c.disabled) ? c.disabled : [] });
  } catch (e) {
    send(res, 200, { disabled: [], error: e.message });
  }
}
