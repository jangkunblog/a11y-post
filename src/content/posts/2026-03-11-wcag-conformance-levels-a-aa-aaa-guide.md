---
title: "WCAG 적합성 등급 A, AA, AAA의 의미와 가치, 업무 적용 완전 가이드"
description: "WCAG 적합성 등급 A, AA, AAA의 차이와 실제 가치, WCAG 2.2 기준에서의 해석, 기획·디자인·개발·QA 단계별 적용 방법을 실무 관점으로 정리한다."
pubDatetime: 2026-03-11T19:00:00+09:00
draft: false
featured: true
author: "관리자"
tags:
  - wcag
  - accessibility
  - conformance
  - wcag22
  - qa
  - design-system
---

<figure>
  <img src="/images/wcag-conformance-levels-map.svg" alt="WCAG 적합성 등급 A, AA, AAA의 포함 관계와 실무 기본선이 AA임을 보여주는 다이어그램" />
  <figcaption>WCAG 적합성 등급의 포함 관계와 실무 기준선을 정리한 다이어그램</figcaption>
</figure>

접근성 문서를 처음 펼치면 가장 먼저 부딪히는 단어가 `Level A`, `Level AA`, `Level AAA`다. 표기 자체는 단순해 보이지만, 실제 업무에서는 이 세 등급이 목표 설정, 일정, 품질 기준, 출시 리스크까지 모두 바꾼다. 그래서 등급을 "높을수록 좋다"라는 직관으로만 다루면, 요구사항을 과소해석하거나 반대로 과도하게 적용해 일정이 무너지는 문제가 반복된다.

이 글은 WCAG 적합성 등급을 점수표처럼 비교하는 방식이 아니라, 우리가 제품을 만들고 운영하는 관점에서 다시 정리한다. 무엇이 최소선이고, 무엇이 실무 기본선이며, 무엇을 전략적으로 선택해야 하는지 구분해서 본다. WCAG 2.2를 기준으로 현재 기준선을 명확히 두고,<sup><a class="cite-ref" href="https://www.w3.org/TR/WCAG22/#conformance" title="[1] WCAG 2.2 Conformance" data-cite="[1] WCAG 2.2 Conformance" data-cite-source-excerpt="For Level AA conformance, the web page satisfies all the Level A and Level AA success criteria." data-cite-source-origin="WCAG 2.2 Conformance" data-cite-highlight="Level AA conformance" target="_blank" rel="noopener noreferrer">[1]</a></sup> 역할별 적용 방법과 운영 체크리스트까지 연결한다.

## 왜 A, AA, AAA를 다시 정리해야 하는가

접근성 이슈는 대부분 구현 단계에서 발견되지만, 원인은 그보다 훨씬 앞선 의사결정에서 만들어지는 경우가 많다. 등급 해석이 애매한 상태에서 기획이 시작되면, 디자인 가이드와 개발 컴포넌트가 서로 다른 기준을 참조한다. 그 결과 QA에서 "어느 기준으로 봐야 하는가"가 다시 논쟁이 된다. 같은 기능을 두고도 팀마다 결론이 달라지는 이유가 여기에 있다.

### 등급이 품질 점수처럼 오해되는 이유

A, AA, AAA를 숫자처럼 보면 A는 낮은 품질, AAA는 높은 품질이라는 단순 비교로 흘러가기 쉽다. 하지만 WCAG의 등급은 품질 점수라기보다 요구사항 집합의 범위 차이에 가깝다. 어떤 등급을 채택하느냐는 제품이 해결하려는 사용자 맥락과 운영 가능한 검증 체계를 함께 고려해 결정해야 한다. 점수 경쟁으로 접근하면 실제 사용자 불편보다 문서상 달성률이 우선되는 왜곡이 생긴다.

### 기준 선택이 늦을수록 비용이 커지는 이유

등급 기준이 늦게 정해질수록 리워크 범위가 넓어진다. 컴포넌트 완성 이후에 기준을 올리면 색 대비, 포커스 표시, 오류 안내, 키보드 흐름을 한꺼번에 뜯어고쳐야 한다. 반대로 초기에 기준을 명시하면 기능별 수용 기준이 빠르게 정리되고, 구현과 검증이 같은 방향으로 정렬된다. 결국 등급 선택은 접근성 정책이 아니라 일정 관리 전략이기도 하다.

## WCAG 적합성 등급의 공식 정의

WCAG에서 적합성(Conformance)은 "몇 개를 잘했는가"가 아니라 "해당 등급에 필요한 성공 기준을 충족했는가"로 판단된다.<sup><a class="cite-ref" href="https://www.w3.org/TR/WCAG22/#conformance" title="[1] WCAG 2.2 Conformance" data-cite="[1] WCAG 2.2 Conformance" data-cite-source-excerpt="For Level AA conformance, the web page satisfies all the Level A and Level AA success criteria." data-cite-source-origin="WCAG 2.2 Conformance" data-cite-highlight="satisfies all the Level A and Level AA success criteria" target="_blank" rel="noopener noreferrer">[1]</a></sup> 이 정의를 먼저 잡아야 체크리스트 운영이 흔들리지 않는다. 문서에 있는 문장을 그대로 옮겨 적는 것보다, 제품 수준에서 어떤 증거로 충족을 판단할지를 함께 정하는 것이 중요하다.

### Conformance Requirements에서 보는 핵심

적합성 판정은 단일 화면이 아니라 전체 페이지와 프로세스 맥락을 포함한다.<sup><a class="cite-ref" href="https://www.w3.org/TR/WCAG22/#conformance" title="[1] WCAG 2.2 Conformance" data-cite="[1] WCAG 2.2 Conformance" data-cite-source-excerpt="For complete processes, all web pages in the process conform at the specified level or better." data-cite-source-origin="WCAG 2.2 Conformance Requirement 3: Complete processes" data-cite-highlight="all web pages in the process conform" target="_blank" rel="noopener noreferrer">[1]</a></sup> 즉 한 화면에서 우연히 통과해도 실제 사용자 흐름에서 실패하면 적합성을 말하기 어렵다. 또한 접근성 대체 수단이 있다고 해서 원래 흐름의 문제를 무조건 상쇄할 수 있는 것도 아니다. 그래서 판정은 기능 중심이 아니라 사용자 과업 중심으로 설계해야 한다.

WCAG 2.2 Conformance Requirement 3은 `Complete processes`를 별도 요구사항으로 둔다. 장바구니 담기 -> 배송지 입력 -> 결제 완료처럼 연쇄된 과업에서, 배송지 입력 단계 하나만 접근성 실패여도 앞뒤 화면 통과 결과와 무관하게 프로세스 전체를 실패로 본다. 이 원리를 문서에 명시해두면 "페이지별 점수는 통과인데 왜 출시를 막느냐"라는 논쟁을 줄일 수 있다. 검수 단위를 화면 묶음이 아니라 사용자 과업으로 재정의해야 하는 이유가 여기에 있다.

### A, AA, AAA의 관계를 올바르게 읽는 방법

등급은 계층 구조로 읽는 편이 정확하다. AA를 목표로 하면 A 기준이 포함되고, AAA를 목표로 하면 A와 AA 기준이 함께 포함된다. 다만 "AAA가 항상 최종 목표"라는 뜻은 아니다. 제품 특성, 콘텐츠 성격, 기술 제약, 운영 가능성을 고려해 합리적인 기준선을 정하고, 그 위에 선택적 강화 항목을 얹는 방식이 현실적이다.

## Level A의 의미와 한계

Level A는 가장 낮은 문턱이라는 표현 때문에 종종 축소해서 이해된다. 그러나 A가 다루는 항목은 키보드 접근, 기본 대체 텍스트, 구조적 정보 제공처럼 사용자 성공에 직접 연결되는 핵심 요소를 포함한다. 즉 A는 "옵션"이 아니라 접근 가능한 경험을 시작하기 위한 최소 토대다.

### A가 보장하는 최소선

A 기준을 충족하면 최소한의 접근 경로를 확보할 가능성이 높아진다. 화면리더 사용자에게 필요한 기본 정보가 제공되고, 마우스 없이도 주요 조작이 가능해진다. 콘텐츠 구조가 의미 단위로 구분되면서 탐색 실패도 줄어든다. 이 최소선이 무너지면 이후 등급 논의 자체가 의미를 잃는다.

### A만으로 남는 사용자 위험

A만 충족한 상태에서는 가독성, 오류 회복, 인지 부담 같은 영역에서 여전히 실패가 남을 수 있다. 예를 들어 대비 수준, 폼 오류 안내의 명확성, 상태 변화의 예측 가능성은 실제 과업 성공률에 큰 영향을 준다. 그래서 운영 기준을 A에서 멈추면 사용자별 편차가 크게 벌어진다. A는 출발점이지 도착점이 아니다.

## Level AA가 실무 기본선이 된 배경

많은 조직이 AA를 기본 준수선으로 채택하는 이유는 단순히 관행이 아니라, 사용자 위험과 구현 가능성 사이의 균형이 상대적으로 맞기 때문이다. 법·조달·공공 영역에서도 AA를 기준선으로 채택하는 사례가 많다. 민간 서비스에서도 품질 기준과 릴리스 관리에 적용하기 쉬운 수준이라는 점이 크다.

### 정책과 시장에서 AA가 선호되는 이유

AA는 사용자 경험 개선 효과가 크면서도 운영 불가능한 수준으로 기준이 치솟지 않는다. 이 균형 때문에 계약 문서와 가이드라인에서 기준선으로 자주 명시된다. 또한 디자인 시스템 단위로 내재화하기도 수월하다. 컴포넌트 단위에서 반복 적용 가능한 기준이 많아, 장기적으로 유지보수 비용을 낮추는 데 유리하다.

### 제품 품질 관점에서 AA의 실제 가치

AA를 적용하면 사용자 과업 실패율이 눈에 띄게 줄어드는 구간이 많다. 탐색, 입력, 오류 수정, 상태 인지 같은 핵심 흐름에서 안정성이 높아진다. 결국 문의 대응 비용과 QA 재검수 비용도 함께 줄어든다. 접근성 비용이 늘어나는 것이 아니라, 품질 부채를 선제적으로 줄이는 구조가 만들어진다.

## Level AAA를 다루는 현실적 방법

AAA는 가장 높은 등급이지만, 모든 콘텐츠와 모든 화면에 동일하게 적용하기 어려운 항목이 포함된다. 그래서 실무에서는 AAA를 "전면 의무"보다 "목표 지향적 확장"으로 다루는 편이 안정적이다. 핵심 사용자군과 핵심 과업에 우선 적용하고, 효과를 검증해 확장하는 전략이 필요하다.

### AAA를 전면 목표로 잡기 어려운 구조적 이유

일부 AAA 기준은 콘텐츠 특성, 서비스 목적, 표현 방식에 따라 충족 난도가 크게 달라진다. 모든 페이지를 동일 강도로 맞추려 하면 제작·검수 비용이 급격히 증가한다. 기준선이 너무 높아지면 오히려 현장에서는 체크리스트 회피 문화가 생긴다.

W3C Understanding Conformance는 다음을 명시한다. "It is not recommended that Level AAA conformance be required as a general policy for entire sites."<sup><a class="cite-ref" href="https://www.w3.org/WAI/WCAG22/Understanding/conformance" title="[2] Understanding Conformance" data-cite="[2] Understanding Conformance" data-cite-source-excerpt="It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA success criteria for some content." data-cite-source-origin="Understanding Conformance" data-cite-highlight="not recommended that Level AAA conformance be required" target="_blank" rel="noopener noreferrer">[2]</a></sup> 즉 AAA를 전면 의무로 선언하는 방식 자체가 표준 해석과도 맞지 않는다. 실무에서는 핵심 과업과 고위험 사용자 흐름에 AAA를 선택 적용하고, 나머지는 AA 운영 품질을 안정화하는 편이 더 타당하다. 따라서 현실 가능한 적용 범위를 명시해 운영해야 한다.

### AAA를 선택적으로 적용하는 전략

우선순위가 높은 기능부터 적용하는 방식이 효과적이다. 예를 들어 회원가입, 결제, 신청, 학습 콘텐츠처럼 실패 비용이 큰 흐름에 AAA 강화 항목을 먼저 적용한다. 이후 사용자 피드백과 이탈 데이터, QA 결과를 근거로 확장 범위를 조정한다. 이렇게 하면 이상과 현실 사이의 간극을 줄일 수 있다.

## 최신 WCAG 2.2에서 A, AA, AAA는 어떻게 읽어야 하는가

현재 실무 기준선은 WCAG 2.2 Recommendation이다.<sup><a class="cite-ref" href="https://www.w3.org/TR/WCAG22/#conformance" title="[1] WCAG 2.2 Conformance" data-cite="[1] WCAG 2.2 Conformance" data-cite-source-excerpt="For Level AA conformance, the web page satisfies all the Level A and Level AA success criteria." data-cite-source-origin="WCAG 2.2 Conformance" data-cite-highlight="Level AA conformance" target="_blank" rel="noopener noreferrer">[1]</a></sup> WCAG 3.0은 중요한 준비 대상이지만, 아직 Working Draft이므로 준수 기준선으로 직접 대체하기 어렵다.<sup><a class="cite-ref" href="https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/" title="[3] WCAG 3 Introduction (incomplete draft)" data-cite="[3] WCAG 3 Introduction (incomplete draft)" data-cite-source-excerpt="W3C Accessibility Guidelines (WCAG) 3 is currently an incomplete draft. WCAG 3 is intended to develop into a W3C Standard in a few years." data-cite-source-origin="WCAG 3 Introduction" data-cite-highlight="currently an incomplete draft" target="_blank" rel="noopener noreferrer">[3]</a></sup> 따라서 등급 운영은 WCAG 2.2 기준으로 명확히 두고, 변화 가능성은 별도 트랙으로 추적하는 방식이 안정적이다.

### WCAG 2.2 추가 기준이 등급 해석에 주는 영향

2.2는 기존 2.x 계열을 유지하면서 일부 기준을 보완해 모바일과 입력 관련 맥락을 더 명확히 다룬다. 이 변화는 등급 체계를 뒤집는 것이 아니라, 기존 운영 공백을 메우는 성격에 가깝다. 그래서 기존 2.1 기반 가이드를 사용하던 경우에도 완전 재작성보다 차이 분석과 보강 방식이 효율적이다. 핵심은 "무엇이 새로 추가되었는가"를 항목 단위로 추적하는 일이다.

### 기존 기준과 충돌 없이 운영하는 방법

운영 문서에 기준 버전과 판정 범위를 명시하면 충돌을 크게 줄일 수 있다. 예를 들어 "준수 판정은 WCAG 2.2 AA 기준"처럼 기준선을 고정하고, 예외 항목은 별도 문서로 관리한다. 동시에 분기 단위로 변경 검토 로그를 남기면 향후 기준 업데이트 때 이전 결정의 맥락을 재사용할 수 있다. 기록이 쌓일수록 논쟁보다 판단 속도가 빨라진다.

### 서드파티 콘텐츠와 부분 적합성(Statement of Partial Conformance)

실무에서 AA 달성을 가장 크게 위협하는 변수는 결제 모듈, 본인인증 창, 외부 지도처럼 통제할 수 없는 서드파티 콘텐츠다. WCAG 2.2는 이런 상황을 위해 `Statement of Partial Conformance - Third Party Content`를 열어두고, 저자 통제 범위 밖 요소 때문에 발생한 실패를 분리해 기록할 수 있게 한다.<sup><a class="cite-ref" href="https://www.w3.org/TR/WCAG22/#conformance" title="[1] WCAG 2.2 Conformance" data-cite="[1] WCAG 2.2 Conformance" data-cite-source-excerpt="Authors of web pages that cannot conform due to content outside of the author&#39;s control may consider a Statement of Partial Conformance." data-cite-source-origin="WCAG 2.2 Conformance" data-cite-highlight="Statement of Partial Conformance" target="_blank" rel="noopener noreferrer">[1]</a></sup> 다만 "해당 외부 콘텐츠를 제거하면 나머지 페이지는 적합함"을 입증할 수 있어야 하며, 예외 범위와 사용자 영향을 공개적으로 명시해야 한다. 운영의 핵심은 예외를 핑계로 품질을 낮추는 일이 아니라, 통제 가능한 영역의 AA 품질을 끝까지 확보하고 외부 공급자 개선 이력을 관리하는 데 있다.

## 역할별 업무 적용

같은 기준도 역할별로 적용 포인트가 다르다. 기획은 과업 정의와 예외 정책을, 디자인은 표현 규칙과 상태 체계를, 개발은 구조와 상호작용을, QA는 재현 가능한 검증 시나리오를 책임진다. 역할 경계가 분명해질수록 "누가 무엇을 확인했는가"가 명확해지고 회귀 대응도 쉬워진다.

### 기획에서 먼저 고정해야 할 항목

기획 단계에서는 사용자 과업 단위를 기준으로 성공 조건을 정의해야 한다. 접근성 요구사항을 부가 항목이 아니라 수용 기준에 포함하면 해석 일관성이 높아진다. 또한 예외 허용 기준과 재검토 시점을 함께 남겨야 한다. 예외는 허용할 수 있지만, 기록되지 않은 예외는 반복적인 장애를 만든다.

### 디자인에서 놓치기 쉬운 포인트

디자인 단계에서는 상태 변화의 가시성과 일관성이 핵심이다. 기본 상태, 포커스 상태, 오류 상태, 비활성 상태가 구조적으로 구분되어야 한다. 대비만 맞추고 상태 표현이 약하면 실제 사용자는 여전히 길을 잃는다. 컴포넌트 가이드에 접근성 규칙을 함께 넣어야 구현 편차를 줄일 수 있다.

### 개발에서 가장 많이 발생하는 회귀 지점

개발 단계에서는 키보드 탐색 순서, 시맨틱 구조, 동적 콘텐츠 업데이트 알림이 자주 깨진다. 기능 추가 시 기존 포커스 흐름이 무너지는 회귀도 반복된다. 그래서 신규 기능 테스트만 하지 말고 공통 컴포넌트 회귀 테스트를 함께 돌려야 한다. 변경 영향도를 컴포넌트 단위로 관리하면 문제 범위를 빠르게 줄일 수 있다.

### QA에서 확인해야 할 수동·자동 점검의 균형

자동 점검은 빠른 스크리닝에 유용하지만, 과업 성공 여부를 단독으로 판정할 수는 없다. 수동 점검에서는 키보드만으로 과업 완료가 가능한지, 화면리더에서 정보 순서가 자연스러운지, 오류 복구가 가능한지를 확인해야 한다. 자동과 수동을 분리하지 않고 묶어서 운영하면 효율과 정확성을 함께 확보할 수 있다. 결국 QA의 목적은 규칙 통과가 아니라 사용자 성공 가능성의 검증이다.

## 자주 하는 실수와 주의점
접근성 운영이 흔들리는 조직에는 공통된 잘못된 사례가 있다. 대부분 기준이 없어서가 아니라, 기준을 적용하는 방식이 잘못되어 발생한다. 아래 패턴을 초기에 차단하면 회귀 비용을 크게 줄일 수 있다.

### 체크리스트만 채우는 방식

체크 항목을 통과했는지 여부만 남기면 맥락이 사라진다. 왜 통과했는지, 어떤 시나리오를 시험했는지 기록하지 않으면 다음 릴리스에서 같은 항목이 다시 논쟁이 된다. 체크리스트는 증거의 시작점이어야 한다. 결론만 남기면 운영 품질은 누적되지 않는다.

### 자동 점검 결과를 통과 기준으로 오해

자동 도구 결과가 깨끗해도 실제 사용자 흐름은 실패할 수 있다. 특히 입력 오류 수정, 복합 위젯 조작, 동적 상태 안내는 수동 검증 없이는 놓치기 쉽다. 자동 점검은 필수지만 충분 조건은 아니다. 도구 점수와 사용자 성공률을 분리해서 봐야 한다.

### 예외 기록 없이 일정으로 밀어붙이는 운영

일정 압박 때문에 예외를 구두 합의로 넘기면 다음 분기에 같은 문제가 반복된다. 예외 항목에는 이유, 영향, 종료 조건, 재검토 날짜를 반드시 남겨야 한다. 기록이 없으면 예외가 기준이 된다. 기준이 무너지면 품질보다 속도만 남고, 결국 더 큰 수정을 부른다.

## 단계형 실무 적용 가이드

등급을 이해하는 것과 실제 운영에 안착시키는 것은 다른 문제다. 아래 단계는 작은 조직과 큰 조직 모두 적용할 수 있는 최소 운영 루프다. 중요한 점은 완벽한 문서를 먼저 만드는 것이 아니라, 반복 가능한 검토 흐름을 먼저 만드는 데 있다.

### 기준선 선언 단계

먼저 준수 기준을 명시한다. 예를 들어 "현재 릴리스 준수 기준은 WCAG 2.2 AA"처럼 문서 첫 줄에 고정한다. 다음으로 AAA 적용 범위를 서비스 핵심 흐름 중심으로 제한해 명시한다. 마지막으로 예외 승인 경로를 정해 비공식 합의를 줄인다.

### 컴포넌트 우선순위 단계

영향도가 큰 컴포넌트부터 정비한다. 폼, 모달, 드롭다운, 탭, 토스트, 내비게이션은 회귀 파급이 큰 영역이다. 각 컴포넌트별로 A/AA 기준 충족 항목과 잔여 리스크를 분리 기록한다. 이 기록은 신규 기능 개발 속도를 높이는 자산이 된다.

### 검수 루프 정착 단계

PR 단계에서 자동 점검을 수행하고, 머지 전 수동 시나리오를 최소 세트로 실행한다. 배포 후에는 장애 리포트와 사용자 피드백을 기준 문서에 역반영한다. 이 루프가 돌아가기 시작하면 접근성은 프로젝트 이벤트가 아니라 운영 체계가 된다. 결국 품질은 한 번의 캠페인이 아니라 반복 구조에서 만들어진다.

## 실행 체크리스트

- 준수 기준 버전 `WCAG 2.2` 명시
- 기본 목표 등급 `AA` 선언, 예외 정책 분리
- AAA의 핵심 과업 흐름 중심 선택 적용 범위 정의
- 기획 문서에 접근성 수용 기준 기록
- 디자인 시스템 컴포넌트에 포커스/오류/상태 규칙 포함
- 개발 리뷰에 키보드 흐름·시맨틱 구조 필수 점검 항목 반영
- QA 자동 점검·수동 시나리오 점검 분리 운영
- 장바구니-배송지-결제 등 완전한 프로세스 단위 시나리오 점검
- 서드파티 모듈 통제 범위와 부분 적합성 선언 문구 기록
- 예외 항목 종료 조건·재검토 날짜 기록
- 분기 단위 WCAG 업데이트 영향도 점검

## 마무리

A, AA, AAA는 "높고 낮음"의 문제가 아니라, 우리가 어떤 사용자 위험을 어디까지 책임질 것인지에 대한 운영 선언이다. A는 출발선이고, AA는 현재 실무에서 가장 안정적인 기준선이며, AAA는 전략적으로 확장할 가치가 큰 강화 영역이다. 중요한 것은 등급 이름이 아니라 기준을 역할별 실행 규칙으로 연결하는 일이다.

기준이 문서에만 머물면 접근성은 늘 일정의 뒷순위가 된다. 반대로 기획, 디자인, 개발, QA의 루프 안에 기준이 들어가면 품질은 점검 이벤트가 아니라 제품의 기본 속성이 된다. 결국 접근성은 추가 작업이 아니라 더 적은 회귀와 더 예측 가능한 운영을 만드는 방식이다.

## 참고 자료

1. WCAG 2.2 Conformance (Full pages, Complete processes, Partial conformance): https://www.w3.org/TR/WCAG22/#conformance
2. Understanding Conformance (Level AAA 정책 해설): https://www.w3.org/WAI/WCAG22/Understanding/conformance
3. WCAG 3 Introduction (incomplete draft): https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/
