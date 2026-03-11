---
title: "A11Y Hot 블로그 시작하기"
description: "키워드 기반 글 생성과 PR 리뷰 발행 흐름을 소개합니다."
pubDatetime: 2026-03-10T00:00:00+09:00
draft: false
featured: true
author: "관리자"
tags:
  - a11y
  - workflow
  - github-actions
---

이 블로그는 **관리자가 키워드를 입력하면 초안이 생성되고, PR 검토 후 머지로 발행**되는 워크플로우를 사용합니다.

## 발행 흐름

1. GitHub Actions에서 `키워드` 입력
2. 자동으로 `src/content/posts/*.md` 초안 파일 생성
3. 자동 PR 생성
4. 리뷰/수정 후 `main` 머지
5. Vercel이 배포

## 왜 PR 기반 발행인가?

- 품질 검토(팩트/톤/브랜드 보이스) 가능
- 변경 이력 추적 가능
- 롤백과 재발행이 쉬움
