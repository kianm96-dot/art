# 명화 타임머신 · 미술사 양식 맞히기

그림 한 점을 보고 어느 시대·양식인지 맞히는 플래시 퀴즈 게임 (정적 사이트, 빌드 없음).

## 구성
- `index.html` 게임 화면 · `teacher.html` 선생님 페이지 · `api/` 점수 저장 · `data.js` 양식·작품 목록 · `img/` 그림 파일
- 17개 양식: 중세 고딕 → 르네상스 → 북유럽 르네상스 → 매너리즘 → 바로크 → 로코코 → 신고전주의 → 낭만주의 → 사실주의 → 인상주의 → 후기 인상주의 → 아르누보·빈 분리파 → 야수파 → 표현주의 → 입체파 → 미래주의 → 추상미술 (작품 약 80점)
- 모드: 차근차근 퀴즈(20초, 해설) / 60초 타임어택 / 양식 도감
- 설정: 범위(전체·고전·근현대), 난이도(쉬움·어려움), 문제 수(10·20·30)

## 그림 이미지
그림은 사이트 안의 `img/` 폴더에 들어 있어서, 게임 중에 외부 사이트에 접속하지 않음.
`data.js`를 고쳐 올리면 GitHub Actions(**Fetch painting images**)가 위키백과에서 새 그림을 받아 `img/`에 자동 커밋함.
위키백과 API는 저작권이 만료된(자유) 이미지만 돌려주므로, 저작권이 살아 있는 작가(피카소, 달리, 워홀 등)는 넣지 않았음.
받지 못한 그림은 `img/manifest.json`의 `failed`에 기록되고, 게임에서는 자동으로 빠짐.

## 학생 기록 · 선생님 페이지
- 학생은 게임 시작 전에 학년·반·번호·이름을 적고, 한 판이 끝나면 점수가 자동 저장됨
- 선생님 페이지: `/teacher` — 게임에 나올 양식 켜기/끄기, 반별로 학생 최고점·정답률·모든 기록 보기, 엑셀(CSV) 받기, 반 기록 지우기
- 저장소: Upstash Redis (버셀 Storage에서 Upstash 연결 — `KV_` 또는 `UPSTASH_REDIS_REST_` 환경변수 둘 다 됨)
- 선생님 비밀번호: 버셀 환경변수 `TEACHER_PASSWORD`
- 로컬 테스트: `node dev-server.js` → http://localhost:3000 (비밀번호 1234, 끄면 기록 사라짐)

## 버셀 배포
1. Framework Preset: Other, Build Command·Output Directory 비움 → Deploy
2. 프로젝트 **Storage → Upstash(Redis) 연결**
3. **Settings → Environment Variables**에 `TEACHER_PASSWORD` 추가
4. Deployments에서 Redeploy (환경변수 반영)
