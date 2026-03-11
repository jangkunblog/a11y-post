# 디지털 접근성 아카이브

Astro 기반 블로그다. 작업 기준 저장소는 `a11y-post` 하나로 고정한다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 글 생성(로컬)

```bash
npm run post:generate -- --keyword "주제"
```

생성 파일은 `src/content/posts/`에 저장된다.

## 발행 흐름

1. 로컬에서 글 작성/수정
2. 브랜치 생성 후 커밋
3. GitHub PR 생성 및 리뷰
4. `main` 머지
5. 머지 후 GitHub Actions가 Vercel 배포

## 필수 GitHub Secrets

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 선택 환경 변수

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (기본 `gpt-4o-mini`)
