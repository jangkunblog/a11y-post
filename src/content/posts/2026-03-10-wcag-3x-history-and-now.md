---
title: "WCAG 3.0 현재 위치 총정리: 역사, 커뮤니티 논의, 앞으로의 쟁점"
description: "WCAG 1.0~2.2의 공식 이력 위에서 WCAG 3.0 Working Draft의 현재 상태를 정리하고, AG WG·Silver Community Group·GitHub에서 논의되는 핵심 이슈와 향후 관전 포인트를 설명한다."
pubDatetime: 2026-03-10T00:15:00+09:00
draft: false
featured: true
author: "관리자"
tags:
  - wcag
  - accessibility
  - standards
  - wcag3
---

WCAG 3.0을 둘러싼 대화는 최근 몇 년 사이 훨씬 자주 등장했지만, 공개 글과 실무 메모에서는 여전히 같은 질문이 반복된다. 지금 무엇을 준수 기준으로 삼아야 하는지, 그리고 WCAG 3.0 논의에서 어떤 변화를 미리 읽어야 하는지가 자주 섞인다. 이 두 질문을 분리하지 않으면 한쪽에서는 초안을 과신하고, 다른 한쪽에서는 초안이라는 이유로 논의를 완전히 미루는 일이 생긴다. 결과적으로 접근성 품질보다 문구 해석 싸움이 커지고, 의사결정 속도도 느려진다.

이 글은 2026년 3월 11일 기준으로 WCAG의 흐름을 다시 정리하고, WCAG 3.0 Working Draft를 실무에서 어떻게 읽어야 하는지까지 연결한다.<sup><a class="cite-ref" href="https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/" title="[1] WCAG 3 Introduction (Updated 3 March 2026)" data-cite="[1] WCAG 3 Introduction (Updated 3 March 2026)" target="_blank" rel="noopener noreferrer">[1]</a></sup><sup><a class="cite-ref" href="https://www.w3.org/WAI/news/2026-03-03/wcag3/" title="[2] For Review: WCAG 3 Working Draft – March 2026" data-cite="[2] For Review: WCAG 3 Working Draft – March 2026" target="_blank" rel="noopener noreferrer">[2]</a></sup> 특히 커뮤니티와 GitHub에서 실제로 어떤 쟁점이 반복되는지를 중심으로 과거-현재-미래를 한 흐름으로 묶는다.<sup><a class="cite-ref" href="https://github.com/w3c/wcag3/issues" title="[9] WCAG 3 GitHub issues" data-cite="[9] WCAG 3 GitHub issues" target="_blank" rel="noopener noreferrer">[9]</a></sup> 개발자, 디자이너, 기획자가 같은 언어로 논의할 수 있도록 "준수 기준"과 "준비 기준"의 경계를 분명히 세우는 데 목적을 둔다.

## 우리가 먼저 세워야 할 문제 정의

WCAG 3.0 문서를 읽기 전에 먼저 정리해야 할 것은 문서의 목적이 아니다. 우리가 이 문서를 어떤 판단에 사용할지를 먼저 정해야 한다. 표준 문서를 읽는 방식은 결국 운영 방식으로 연결된다. 공통 기준 없이 각자 해석하면 QA 체크포인트와 디자인 가이드가 어긋나고, 같은 이슈가 반복된다.

### 준수 기준과 준비 기준의 혼선을 먼저 끊기

준수 기준은 법적·계약적·품질 게이트에 들어가는 규칙을 뜻하고, 준비 기준은 앞으로 바뀔 가능성이 큰 모델을 선행 학습하는 기준을 뜻한다. WCAG 3.0은 지금 시점에서 후자에 더 가깝다. 반대로 WCAG 2.2는 현재 운영 게이트에 직접 연결하기 쉬운 기준이다. 이 분리를 먼저 정리하면 개인 노트와 공개 글의 톤이 안정된다.

### 왜 이 분리가 실제 일정 리스크를 줄이는가

준수 기준과 준비 기준이 섞이면, 작은 UI 수정에도 불필요한 논쟁이 생긴다. 특히 접근성 이슈는 재현 조건과 테스트 방식까지 함께 맞춰야 해서 해석 불일치가 일정 지연으로 바로 이어진다. 반대로 이중 트랙으로 운영하면 지금 릴리스 품질은 WCAG 2.2로 고정하고, WCAG 3.0 변화는 영향 분석 대상으로만 다룰 수 있다. 이 방식은 기술 부채를 줄이면서도 변화 대응 속도를 유지하게 만든다.

## WCAG 역사 흐름을 한 번에 읽는 배경 정리

WCAG 3.0을 이해하려면 과거 버전을 연표처럼 외우는 것보다, W3C가 어떤 방식으로 표준을 진화시켜 왔는지를 보는 편이 낫다. 표준의 템포와 공개 검토 구조를 이해하면 현재 문서 상태를 과장하거나 축소하지 않게 된다. 접근성 표준은 한 번에 갈아엎는 방식보다 누적적 개선 방식으로 발전해 왔다. 이 맥락을 놓치면 WCAG 3.0을 "즉시 전환" 또는 "아직 의미 없음"이라는 극단으로 오해하기 쉽다.

### WCAG 1.0에서 2.x까지의 핵심 전환점

WCAG 1.0(1999)은 웹 콘텐츠 접근성 기준의 출발점이었고, WCAG 2.0(2008)은 보다 원칙 중심의 구조를 갖춘 Recommendation으로 자리 잡았다. 이후 WCAG 2.1(2018), WCAG 2.2(2023)는 이전 버전과의 호환성을 유지하면서 범위를 확장하는 방향으로 발전했다.<sup><a class="cite-ref" href="https://www.w3.org/standards/history/WAI-WEBCONTENT/" title="[8] WCAG 1.0 Publication History" data-cite="[8] WCAG 1.0 Publication History" target="_blank" rel="noopener noreferrer">[8]</a></sup><sup><a class="cite-ref" href="https://www.w3.org/standards/history/WCAG20/" title="[7] WCAG 2.0 Publication History" data-cite="[7] WCAG 2.0 Publication History" target="_blank" rel="noopener noreferrer">[7]</a></sup><sup><a class="cite-ref" href="https://www.w3.org/standards/history/WCAG21/" title="[6] WCAG 2.1 Publication History" data-cite="[6] WCAG 2.1 Publication History" target="_blank" rel="noopener noreferrer">[6]</a></sup><sup><a class="cite-ref" href="https://www.w3.org/standards/history/WCAG22/" title="[5] WCAG 2.2 Publication History" data-cite="[5] WCAG 2.2 Publication History" target="_blank" rel="noopener noreferrer">[5]</a></sup> 이 연속성은 실무에서 매우 중요하다. 기존 준수 체계를 완전히 버리지 않고 확장해 온 흐름이기 때문이다.

### Recommendation과 Working Draft를 다르게 읽어야 하는 이유

W3C의 Publication History를 보면 문서 상태가 명확히 구분된다.<sup><a class="cite-ref" href="https://www.w3.org/standards/history/wcag-3.0/" title="[3] WCAG 3.0 Publication History" data-cite="[3] WCAG 3.0 Publication History" target="_blank" rel="noopener noreferrer">[3]</a></sup> Recommendation은 운영 기준으로 삼기 위한 안정성과 합의 수준을 갖춘 상태이고, Working Draft는 공개 검토를 통해 구조와 문구가 계속 다듬어지는 상태다. 둘을 같은 강도로 다루면 정책 문서가 흔들린다. WCAG 3.0을 읽을 때도 이 기본 원칙이 해석의 출발점이 된다.

## WCAG 3.0의 현재 상태

W3C WCAG 3 Introduction은 WCAG 3.0을 불완전한 초안(incomplete draft)으로 명시한다.<sup><a class="cite-ref" href="https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/" title="[1] WCAG 3 Introduction (Updated 3 March 2026)" data-cite="[1] WCAG 3 Introduction (Updated 3 March 2026)" target="_blank" rel="noopener noreferrer">[1]</a></sup> 동시에 문서는 지속적으로 업데이트되며, 2026년 3월 리뷰 드래프트에서도 용어와 구조가 실제로 조정됐다.<sup><a class="cite-ref" href="https://www.w3.org/WAI/news/2026-03-03/wcag3/" title="[2] For Review: WCAG 3 Working Draft – March 2026" data-cite="[2] For Review: WCAG 3 Working Draft – March 2026" target="_blank" rel="noopener noreferrer">[2]</a></sup> 즉 이름만 유지되고 내용이 고정된 문서가 아니라, 공개 피드백을 흡수하며 점진적으로 정교화되는 문서다. 실무에서는 이 성격을 정확히 이해한 뒤 활용해야 한다.

<figure>
  <img src="https://www.w3.org/WAI/content-images/wai-intro-wcag/wcag3_social.png" alt="W3C가 공개한 WCAG 3 소개 이미지" />
  <figcaption>W3C가 공개한 WCAG 3 소개 이미지</figcaption>
</figure>

### 2026년 3월 시점에서 확인할 포인트

가장 중요한 변화는 구조와 용어 체계가 계속 정리되고 있다는 점이다. 요구사항을 어떻게 묶고 설명할지, 테스트 가능성을 어떻게 높일지 같은 실질 요소가 아직 논의 중이다. 이 말은 곧 지금 당장 완결된 적합성 모델을 기대하면 안 된다는 뜻이기도 하다. 대신 변화 방향을 읽고 사전 준비 항목을 정리하는 데 가치를 둬야 한다.

이 흐름의 중요한 공개 전환점은 2021년 1월 W3C Blog에서 WCAG 3.0 First Public Working Draft를 알리며, Silver 프로젝트에서 발전해 온 작업을 더 넓은 공개 검토 단계로 올렸다고 설명한 시점이다.<sup><a class="cite-ref" href="https://www.w3.org/blog/2021/wcag-3-fpwd/" title="[10] W3C Blog: WAI publishes WCAG 3.0 First Public Working Draft" data-cite="[10] W3C Blog: WAI publishes WCAG 3.0 First Public Working Draft" target="_blank" rel="noopener noreferrer">[10]</a></sup> 그래서 현재 글의 역사·현재 상태 구간은 2026년 리뷰 드래프트만이 아니라, 2021년 공개 초안 전환점을 기준으로도 읽을 수 있어야 맥락이 더 선명해진다.

### 지금 당장 운영 문서에 어떻게 표기할 것인가

블로그 글이나 가이드 문서에는 "WCAG 3.0 Working Draft"라고 상태를 함께 표기하는 방식이 안전하다. 이 표기는 문서의 중요도를 낮추려는 목적이 아니라, 활용 목적을 정확히 전달하기 위한 장치다. 정책·계약·릴리스 게이트 문서에서는 WCAG 2.2 중심의 준수 기준을 명시하고, WCAG 3.0은 별도의 준비 섹션에서 다루는 구조가 좋다. 이렇게 분리해 두면 해석 충돌이 크게 줄어든다.

## 커뮤니티 논의의 과거와 현재

WCAG 3.0은 갑자기 등장한 별도의 규격이 아니라, AG WG와 Silver 계열 논의의 연속선에서 발전해 온 작업이다. 커뮤니티 기반의 공개 피드백은 단순 참고가 아니라 문서 변화의 핵심 동력이다. 실제로 W3C는 GitHub 이슈와 공개 코멘트 채널을 통해 의견 수렴 경로를 명확히 열어두고 있다.<sup><a class="cite-ref" href="https://github.com/w3c/wcag3/issues" title="[9] WCAG 3 GitHub issues" data-cite="[9] WCAG 3 GitHub issues" target="_blank" rel="noopener noreferrer">[9]</a></sup> 이 구조를 이해하면 왜 문구가 자주 바뀌는지 자연스럽게 설명할 수 있다.

### AG WG와 Silver Community Group의 역할

AG WG는 WCAG 계열 가이드라인의 공식 작업을 이끄는 중심 그룹이고, Silver Community Group은 논의와 실험을 넓히는 공개 커뮤니티 축으로 기능해 왔다. 둘은 경쟁 관계가 아니라 상호 보완 구조에 가깝다. 실무 관점에서는 누가 최종 결정권을 갖는지보다, 어떤 논점이 어디서 먼저 부상하는지를 추적하는 편이 더 중요하다. 초기 논점은 커뮤니티 대화에서 먼저 선명해지는 경우가 많기 때문이다.

### 공개 코멘트 구조가 주는 실무적 의미

공개 코멘트 구조의 장점은 투명성이다. 어떤 표현이 왜 수정되는지, 어떤 요구가 보류되는지의 흔적이 기록된다. 이 기록은 의사결정 근거를 남길 때 특히 유용하다. 단순히 "W3C가 바뀌었다"가 아니라 "어떤 논점이 어떤 이유로 조정되고 있는가"를 공개 글과 노트에 설명할 수 있게 해주기 때문이다.

## GitHub 이슈에서 반복되는 핵심 쟁점

`w3c/wcag3` 이슈 목록을 보면 주제가 다양해 보이지만, 크게 묶으면 몇 가지 축으로 수렴한다. 구조 재편, 적용 범위 경계, 용어 정밀도, 테스트 가능성, 전환 전략이 대표적이다. 이 다섯 축은 서로 독립적이지 않다. 특정 용어 하나의 모호성이 테스트 절차와 적합성 모델까지 연쇄적으로 영향을 주기 때문이다.

### 구조 재편과 문서 가독성 이슈

Core와 그 외 문서를 어떻게 계층화할지에 대한 논의는 단순 편집 문제가 아니다. 문서 구조가 바뀌면 요구사항의 우선순위를 읽는 방식도 바뀌고, 체크리스트 구조까지 달라진다. 특히 대규모 조직은 문서 계층을 내부 정책에 그대로 매핑하는 경우가 많아 구조 변경의 파급이 크다. 그래서 구조 논의는 언제나 운영 비용 논의로 이어진다.

여기서 자주 놓치는 핵심은 평가 방식의 패러다임 전환이다. WCAG 2.x가 성공 기준별 통과/실패(Pass/Fail)를 누적해 A/AA/AAA를 판정하는 구조였다면, WCAG 3.0 논의는 결과(Outcome) 중심 평가와 점수화(Scoring), Bronze/Silver/Gold 같은 새로운 적합성 모델 도입 가능성을 함께 다룬다. 이 방식은 완벽하지 않아도 개선 수준을 단계적으로 반영할 수 있다는 장점이 있다. 반면 실무에서는 계약·릴리스 게이트의 커트라인을 다시 정의해야 하므로, 조직 입장에서 운영 비용과 책임 경계 논의가 더 커진다.

### 적용 범위 경계: 웹 콘텐츠를 넘어 어디까지 볼 것인가

저자(author)만 대상으로 볼지, user agent나 authoring tool까지 어느 수준으로 포괄할지에 대한 질문은 꾸준히 등장한다. 네이티브 앱과 하이브리드 환경이 보편화된 현실에서 이 경계는 더 민감해졌다. 범위가 넓어질수록 포괄성은 높아지지만, 동시에 테스트와 준수 판정은 복잡해진다. 실무자는 이 논점을 제품 포트폴리오 관점에서 읽어야 한다.

예를 들어 다크 모드에서 본문 글씨가 거의 보이지 않는 현상이 발생했을 때, 원인이 서비스 CSS 설계(저자 책임)인지, 브라우저의 강제 색상 변환(User Agent 책임)인지, 보조기기 렌더링 한계인지 먼저 가른다. 책임 주체가 달라지면 수정 위치도 달라지고, 재현 환경과 검수 기준도 함께 달라진다. 이 경계를 흐리게 두면 같은 결함을 두고 팀 간 책임 공방이 반복되고, 실제 사용자 문제 해결은 늦어진다.

### 용어 모호성과 테스트 가능성의 충돌

"detectable" 같은 표현이 어느 정도로 측정 가능한지를 둘러싼 논의는 반복된다. 용어가 추상적이면 의도는 넓게 담을 수 있지만, 평가 일관성은 떨어진다. 반대로 용어를 너무 좁게 고정하면 실제 사용자 맥락을 놓칠 수 있다. WCAG 3.0 논의의 난점은 이 균형점을 찾는 데 있다.

### 전환 전략과 도입 비용 문제

많은 실무자가 가장 궁금해하는 지점은 "언제, 어떻게 옮겨갈 것인가"다. 커뮤니티에서도 이 질문은 자주 제기된다. 전환 시나리오가 불명확하면 조직은 보수적으로 움직이고, 결국 준비가 늦어진다. 그래서 지금 단계에서 필요한 것은 확정 일정 예측이 아니라, 전환 가정별 영향 분석을 일찍 시작하는 일이다.

## 앞으로의 변화: 미래 시나리오로 읽기

W3C 문서가 시사하는 미래는 한 줄로 요약하면 "점진적 구체화"다. 갑작스러운 단절보다 공개 검토를 거치며 모델을 다듬는 패턴이 이어질 가능성이 크다. 실무자는 이 패턴을 전제로 계획을 짜는 편이 안전하다. 즉 단기적으로는 안정 운영, 중기적으로는 구조 적응, 장기적으로는 평가 체계 재정렬을 준비해야 한다.

### 단기 시나리오: 2.2 운영 고도화와 3.0 모니터링 병행

단기에는 WCAG 2.2 기반 QA와 릴리스 게이트를 더 정교하게 만드는 일이 우선이다. 동시에 WCAG 3.0 업데이트를 분기 단위로 모니터링해 영향이 큰 항목만 추려 실험한다. 이 단계의 핵심은 과도한 문서 개편을 피하고, 실제 제품 리스크와 연결되는 변화만 관리하는 데 있다. 작은 파일럿으로 시작해 해석 역량을 키우는 접근이 효과적이다.

### 중기 시나리오: 디자인 시스템과 공통 컴포넌트 선행 정비

중기에는 변화 가능성이 큰 요구사항을 디자인 시스템과 공통 컴포넌트에 선반영하는 방식이 유리하다. 버튼, 폼, 모달, 내비게이션처럼 재사용 빈도가 높은 영역부터 점검하면 효과가 크다. 이 작업은 표준 확정 전에도 충분한 가치가 있다. 구조적 품질을 먼저 높이면 어떤 모델이 오더라도 대응 비용이 줄어든다.

### 장기 시나리오: 적합성 모델 변화에 맞춘 조직 프로세스 재설계

장기적으로는 QA 프로세스, 문서 체계, 책임 분담까지 함께 조정해야 할 가능성이 크다. 특히 자동화 도구 결과를 어디까지 신뢰하고, 수동 검증을 어떤 단계에서 의무화할지 정책 재정의가 필요해질 수 있다. 이 시점에서는 특정 기술 부서만의 문제가 아니라 제품 운영 체계 전체의 문제로 확장된다. 그래서 지금부터 역할별 책임 경계를 미리 정리해 둘 필요가 있다.

## 실무 적용 단계

WCAG 3.0을 효과적으로 다루려면 많이 읽는 것보다 운영 루프를 만드는 일이 중요하다. 정보는 계속 바뀌지만, 루프가 있으면 관점이 쉽게 흔들리지 않는다. 아래 단계는 개발·디자인·기획이 함께 적용하기 쉬운 최소 운영 모델이다. 조직 규모와 상관없이 그대로 이식할 수 있도록 단계를 단순화했다.

### 단계 1: 기준 문서 분리

준수 기준 문서와 준비 기준 문서를 분리해 저장소에서 독립 파일로 관리한다. 준수 문서는 WCAG 2.2와 현재 QA 규칙에 집중하고, 준비 문서는 WCAG 3.0 변경 추적 로그를 중심으로 운영한다. 두 문서를 분리하면 결론을 내리기 쉬워진다. 논의 목적이 섞이지 않기 때문이다.

### 단계 2: 분기별 변경 리뷰 루틴

분기마다 W3C WCAG 3 관련 업데이트와 GitHub 주요 이슈를 요약해 메모를 남긴다. 이때 모든 이슈를 추적할 필요는 없다. 자신이 다루는 제품·서비스와 직접 연결되는 항목만 선별하면 충분하다. 리뷰의 목적은 즉시 결정을 내리는 일이 아니라 준비 우선순위를 조정하는 일이다.

### 단계 3: 영향도 기반 파일럿 실행

선별된 논점을 1~2개의 대표 컴포넌트에만 시험 적용해 본다. 예를 들어 포커스 이동, 입력 오류 안내, 구조적 내비게이션처럼 사용자 영향이 큰 영역을 우선 선택한다. 디자인 시스템 파일럿이라면 텍스트 색상 토큰을 대상으로 기존 WCAG 2.x의 대비 비율(예: 4.5:1) 검증과 함께 WCAG 3.0에서 논의 중인 APCA(Advanced Perceptual Contrast Algorithm) 값을 병행 측정하는 방식이 실무적으로 유용하다. Figma 플러그인 결과와 실제 코드 반영 결과를 같이 남기면, 코드 변경량과 디자인 자유도 사이의 트레이드오프를 더 명확히 비교할 수 있다. 파일럿 결과는 코드 변경량, 디자인 자유도, QA 소요 시간, 사용자 리스크 관점으로 기록한다. 이렇게 쌓인 데이터가 이후 전환 논의의 가장 강한 근거가 된다.

## 자주 하는 실수와 주의점
많은 조직과 개인이 같은 함정에 빠진다. 표준 문서를 열심히 읽는데도 품질이 잘 오르지 않는 이유는, 문서 해석이 운영 규칙으로 번역되지 않기 때문이다. 아래 잘못된 사례는 실제 프로젝트에서 반복적으로 관찰되는 유형이다. 미리 차단하면 시행착오를 크게 줄일 수 있다.

### ❌ 잘못된 사례 1: 초안 문구를 즉시 준수 규칙으로 승격

초안의 표현을 곧바로 릴리스 게이트에 반영하면 QA 기준이 자주 바뀌고 운영 신뢰도 떨어진다. 기준 변경이 잦아지면 구성원은 접근성 자체를 불확실한 영역으로 인식하게 된다. 결과적으로 필요한 개선까지 저항을 받게 된다. 초안은 우선 영향 분석 대상으로 관리해야 한다.

### ❌ 잘못된 사례 2: 반대로 초안 논의를 완전히 무시

"아직 확정이 아니니 나중에 보자"는 태도는 단기적으로 편해 보이지만, 전환 시점에 비용이 폭증한다. 특히 디자인 시스템을 운영하는 조직이나 개인은 사전 준비 여부에 따라 공수 차이가 크게 벌어진다. 무시는 안정 전략이 아니라 리스크 이연 전략에 가깝다. 최소한의 모니터링 루틴은 반드시 필요하다.

### ❌ 잘못된 사례 3: 접근성 이슈를 QA 전담 문제로 축소

접근성은 구현, 카피, 정보 구조, 인터랙션이 함께 맞물리는 영역이다. QA 단계에서만 잡으려 하면 수정 비용이 커지고 반복 결함이 줄지 않는다. WCAG 3.0처럼 모델 변화가 예상되는 시기에는 더더욱 앞단 협업이 중요하다. 기획-디자인-개발에서 공통 언어를 먼저 맞춰야 한다.

## 실무 체크리스트

아래 체크리스트는 지금 바로 개인 노트, 블로그 후속 정리 문서, 리포지토리 문서에 옮겨 사용할 수 있도록 구성했다. 항목을 모두 한 번에 완료할 필요는 없다. 우선순위가 높은 것부터 2주 단위로 갱신하면 충분하다. 핵심은 체크리스트를 문서로만 두지 않고 운영 캘린더와 연결하는 데 있다.

- 준수 기준 문서 기본 참조를 WCAG 2.2 Recommendation으로 명시
- WCAG 3.0 언급 시 `Working Draft` 상태 병기
- WCAG 3 관련 분기 리뷰 일정(담당자/결과물/리뷰일) 캘린더 등록
- GitHub 이슈 중 제품·서비스 연관 주제(모바일, 용어 모호성, 테스트 가능성) 추적 목록 분리
- 디자인 시스템 컴포넌트 중 전환 영향이 큰 항목 3개 선정 및 파일럿 계획 수립
- 대비 파일럿에서 WCAG 2.x 대비 비율과 APCA 병행 측정 여부 결정 및 기록
- 접근성 이슈를 QA 종료 단계가 아니라 기획/디자인 리뷰 단계부터 점검하도록 프로세스 조정

## 마무리

WCAG 3.0은 아직 진행 중인 Working Draft이지만, 그래서 오히려 지금 읽어야 할 이유가 분명하다. 미래의 요구를 정확히 예측하기 위해서가 아니라, 변화의 방향을 운영 방식에 먼저 연결하기 위해서다. 현재 준수는 WCAG 2.2로 안정적으로 운영하고, WCAG 3.0은 구조 변화와 쟁점 흐름을 추적하는 준비 트랙으로 다루는 접근이 가장 현실적이다. 이 원칙을 지키면 우리는 과잉 반응과 무관심 사이를 오가지 않고, 지속 가능한 방식으로 접근성 성숙도를 높일 수 있다.

결국 표준 대응의 품질은 문서 암기량보다 운영 설계에서 갈린다. 공개 논의의 흐름을 읽고, 자신의 제품·서비스 맥락에 맞는 실험과 기록을 남기며, 역할별 책임을 분명히 나누는 운영 방식이 전환기에 강하다. WCAG 3.0은 아직 완성본이 아니지만, 지금도 충분히 유의미한 나침반이다.

## 참고 자료

1. WCAG 3 Introduction (Updated 3 March 2026): https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/
2. For Review: WCAG 3 Working Draft – March 2026: https://www.w3.org/WAI/news/2026-03-03/wcag3/
3. WCAG 3.0 Publication History: https://www.w3.org/standards/history/wcag-3.0/
4. WCAG 2 Overview (2.0/2.1/2.2 관계): https://www.w3.org/WAI/standards-guidelines/wcag/
5. WCAG 2.2 Publication History: https://www.w3.org/standards/history/WCAG22/
6. WCAG 2.1 Publication History: https://www.w3.org/standards/history/WCAG21/
7. WCAG 2.0 Publication History: https://www.w3.org/standards/history/WCAG20/
8. WCAG 1.0 Publication History: https://www.w3.org/standards/history/WAI-WEBCONTENT/
9. WCAG 3 GitHub issues: https://github.com/w3c/wcag3/issues
10. W3C Blog, WAI publishes WCAG 3.0 First Public Working Draft: https://www.w3.org/blog/2021/wcag-3-fpwd/
