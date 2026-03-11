# A11Y Hot Blog

Astro 기반 블로그이며, 발행 흐름은 로컬 작성 중심으로 운영한다.

핵심 목표:

- 로컬에서 포스트 생성/수정
- GitHub Pull Request에서 리뷰
- `main` 머지 시 Vercel 자동 배포

## Stack

- Astro 5
- Markdown content collection
- GitHub Actions (PR 빌드 검증 + `main` 배포)
- Vercel

## 로컬 실행

```bash
npm install
npm run dev
```

## 로컬 포스트 생성

키워드 기반 초안 생성:

```bash
npm run post:generate -- --keyword "주제 문장"
```

- 생성 파일: `src/content/posts/YYYY-MM-DD-*.md`
- 생성기는 `AGENTS.md` 작성 규칙과 `src/content/posts` 전체 기존 글 패턴을 참고한다.
- `OPENAI_API_KEY`가 없거나 호출 실패 시 내장 템플릿으로 생성한다.

## 발행 흐름

1. 로컬에서 포스트 생성/수정
2. 기능 브랜치 생성 후 커밋
3. 원격 push 후 PR 생성
4. PR 리뷰/승인
5. `main` 머지
6. 머지로 인한 `main` push 시 Vercel 배포 워크플로우 자동 실행

## OpenAI 연동 (선택)

로컬 생성 품질을 높이려면 환경 변수 또는 CI Secret으로 다음을 설정한다.

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (선택, 기본값 `gpt-4o-mini`)

## GitHub Actions + Vercel 자동 배포

`.github/workflows/deploy-vercel.yml`는 `main` 브랜치 push(= PR 머지 후)에서만 실행된다.

필수 GitHub Secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## PR 승인 강제(권장)

`main` 보호 규칙:

- `Settings > Branches > Add branch protection rule`
- Branch name pattern: `main`
- `Require a pull request before merging` 활성화
- `Require approvals` 1 이상
- (선택) `Require review from Code Owners` 활성화

## 주요 파일

- `scripts/generate-post-from-keyword.mjs`: 로컬 키워드 초안 생성
- `.github/workflows/validate-pr.yml`: PR 빌드 검증
- `.github/workflows/deploy-vercel.yml`: `main` 배포
- `src/content/posts/`: 포스트 저장 위치
