# A11Y Hot Blog

`reference/a11y-weekly` 스킬의 발행 방식(초안 생성 + 검토 후 발행)과
`https://blog.fe4all.dev/`의 블로그 컨셉을 참고해 만든 Astro 기반 블로그입니다.

핵심 목표:

- 관리자 키워드 입력으로 글 초안 생성
- GitHub Pull Request에서 리뷰
- 머지 시 Vercel 배포로 발행

## Stack

- Astro 5
- Markdown content collection
- GitHub Actions (키워드 -> PR 자동 생성)
- Vercel (main 머지 배포)

## 로컬 실행

```bash
npm install
npm run dev
```

## 관리자 발행 흐름

1. GitHub 저장소의 **Actions** 탭에서 `Create Post PR From Keyword` 실행
2. `keyword` 입력
3. 워크플로우가 `src/content/posts/*.md` 초안 생성 + PR 자동 오픈
4. PR에서 내용 수정/리뷰
5. `main` 머지
6. Vercel이 자동 빌드/배포

## OpenAI 연동 (선택)

GitHub 저장소 Secret에 아래를 설정하면 키워드 기반 본문을 AI로 생성합니다.

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (선택, 미설정 시 Codex 계열 기본 모델 사용)

Secret이 없거나 호출에 실패하면, 내장 템플릿으로 초안을 생성합니다.

## GitHub Actions + Vercel 자동 배포

`main` 브랜치에 푸시되면 `.github/workflows/deploy-vercel.yml`이 실행되어
Vercel로 프로덕션 배포합니다.

GitHub 저장소 Secrets에 아래 값을 추가해야 합니다.

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Vercel 설정

- Framework Preset: `Astro`
- Build Command: `npm run build`
- Output Directory: `dist`
- Production Branch: `main`

## 주요 파일

- `scripts/generate-post-from-keyword.mjs`: 키워드 기반 초안 생성
- `.github/workflows/create-post-pr.yml`: 키워드 입력 -> 자동 PR 생성
- `.github/workflows/validate-pr.yml`: PR 빌드 검증
- `src/content/posts/`: 실제 발행 포스트 저장 위치
