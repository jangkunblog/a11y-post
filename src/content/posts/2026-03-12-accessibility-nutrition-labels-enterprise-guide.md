---
title: "손쉬운 사용 취급 개요표(Accessibility Nutrition Labels) 완전 가이드: 개요, 도입 배경, 앱서비스 기업 대응전략"
description: "Apple의 App Store 손쉬운 사용 취급 개요표(Accessibility Nutrition Labels)를 2026년 3월 기준으로 정리하고, 기능 개요, 평가 기준, 앱서비스 기업의 실무 대응 방안을 단계형으로 설명한다."
pubDatetime: 2026-03-12T20:10:00+09:00
draft: false
featured: true
author: "관리자"
tags:
  - appstore
  - accessibility
  - wcag
  - mobile
  - product
  - app-review
---

Apple이 App Store에 손쉬운 사용 취급 개요표(Accessibility Nutrition Labels)를 도입하면서, 접근성은 더 이상 "앱 내부 품질"만의 문제가 아니게 됐다. 이제 접근성 지원 여부가 앱 다운로드 이전 단계에서 투명하게 공개되며, 이는 곧 검색 노출과 메타데이터 신뢰성으로 직결된다.<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/" title="[2] Apple Newsroom (2025-06-09)" data-cite="[2] Apple Newsroom (2025-06-09)" target="_blank" rel="noopener noreferrer">[2]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

이 글은 2026년 3월 기준으로 해당 기능의 개요와 Apple의 도입 배경을 분석하고, 앱서비스 기업이 실제로 무엇을 어떻게 검증하여 표기해야 하는지를 실무 관점에서 깊이 있게 정리한다.

## 왜 지금 이 이슈를 다루어야 하는가

과거에는 사용자가 앱을 직접 설치하고 실행해 보지 않으면 접근성 지원 여부를 체감하기 어려웠다. 하지만 이제는 App Store 제품 페이지에서 지원 여부를 누구나 사전에 확인할 수 있게 되었고, 사용자는 설치 버튼을 누르기 전부터 앱의 완성도와 기대치를 판단하게 된다.<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/" title="[1] Apple Newsroom (2025-05-13)" data-cite="[1] Apple Newsroom (2025-05-13)" target="_blank" rel="noopener noreferrer">[1]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 

특히 주목할 점은 **글로벌 규제 동향과의 연결성**이다. 유럽접근성법(European Accessibility Act, EAA)인 Directive (EU) 2019/882는 회원국이 관련 조치를 2025년 6월 28일부터 적용하도록 규정한다.<sup><a class="cite-ref" href="https://eur-lex.europa.eu/eli/dir/2019/882/oj" title="[7] European Accessibility Act (Directive 2019/882)" data-cite="[7] European Accessibility Act (Directive 2019/882)" target="_blank" rel="noopener noreferrer">[7]</a></sup> 이에 따라 적용 범위에 포함되는 디지털 서비스 접근성은 권고가 아니라 법적 준수 대상으로 해석된다. Apple의 라벨 도입은 개발사들이 이러한 EAA 준수 여부 및 접근성 현황을 글로벌 시장에 공식적으로 증명할 수 있는 창구를 플랫폼 차원에서 마련해 준 것으로 볼 수 있다.

또한, 단순한 안내문을 넘어 사용자가 접근성 기능을 포함한 검색어로 앱을 찾을 때 이 라벨 정보가 검색 관련성(ASO)에 반영된다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 요컨대 마케팅, 검색 최적화, 글로벌 컴플라이언스(Compliance), 앱 리뷰 리스크가 하나의 메타데이터로 묶이는 구조적 전환점이 도래한 것이다.

## 발표 타임라인과 현재 상태

Apple은 2025년 5월 13일 접근성 기능 발표를 통해 손쉬운 사용 취급 개요표(Accessibility Nutrition Labels)를 최초로 공식화했고, 한 달 뒤인 6월 개발자 도구 업데이트 공지에서 App Store Connect와의 연계를 재차 명시했다.<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/" title="[1] Apple Newsroom (2025-05-13)" data-cite="[1] Apple Newsroom (2025-05-13)" target="_blank" rel="noopener noreferrer">[1]</a></sup><sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/" title="[2] Apple Newsroom (2025-06-09)" data-cite="[2] Apple Newsroom (2025-06-09)" target="_blank" rel="noopener noreferrer">[2]</a></sup>

2026년 3월 App Store Connect 도움말 기준으로, 라벨 입력은 시작 시점에 자율 제출(Voluntary)로 안내되고 있으나, 시간이 지남에 따라 신규 앱 및 업데이트 제출 시 필수 정보로 굳어지는 수순을 밟고 있다. 의무화의 정확한 데드라인이 명시되지 않았더라도 플랫폼의 방향성이 확고해진 이상, 대응을 미루면 기존의 기술 부채가 고스란히 마케팅 부채로 전이될 위험이 크다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

## 손쉬운 사용 취급 개요표 기능 개요

### 무엇을 표기하는가

라벨은 VoiceOver, Voice Control, Larger Text(더 큰 텍스트), Dark Interface(다크 모드), Differentiate Without Color Alone(색상 외의 구별), Sufficient Contrast(충분한 대비), Reduced Motion(동작 줄이기) 등 핵심 접근성 지원 정보를 기기별로 노출한다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 

### 어디에 표시되는가

제품 페이지를 열람하는 기기 유형(iPhone, Mac 등)에 맞춰 해당 기기에 적용되는 라벨만 지능적으로 필터링되어 표시된다. 이 기능은 iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26 이상의 운영체제에서 노출된다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

<div class="anl-slider" data-anl-slider aria-label="Apple 접근성 기능 이미지 슬라이더">
  <div class="anl-slider-stage">
    <figure class="anl-slide is-active">
      <img src="https://www.apple.com/newsroom/images/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/article/Apple-accessibility-features-App-Store-Nutrition-Labels-CVS-Health-app_inline.jpg.large.jpg" alt="App Store 손쉬운 사용 취급 개요표(Accessibility Nutrition Labels) 예시(CVS Health 앱)" />
      <figcaption>손쉬운 사용 취급 개요표 예시 (CVS Health 앱)<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/" title="[1] Apple Newsroom (2025-05-13)" data-cite="[1] Apple Newsroom (2025-05-13)" target="_blank" rel="noopener noreferrer">[1]</a></sup></figcaption>
    </figure>
    <figure class="anl-slide">
      <img src="https://www.apple.com/newsroom/images/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/article/Apple-accessibility-features-App-Store-Nutrition-Labels-Apple-Fitness-app_inline.jpg.large.jpg" alt="App Store 손쉬운 사용 취급 개요표(Accessibility Nutrition Labels) 예시(Apple Fitness 앱)" />
      <figcaption>손쉬운 사용 취급 개요표 예시 (Apple Fitness 앱)<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/" title="[1] Apple Newsroom (2025-05-13)" data-cite="[1] Apple Newsroom (2025-05-13)" target="_blank" rel="noopener noreferrer">[1]</a></sup></figcaption>
    </figure>
    <figure class="anl-slide">
      <img src="https://www.apple.com/newsroom/images/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/article/Apple-accessibility-features-Accessibility-Reader_big.jpg.large.jpg" alt="Accessibility Reader 기능 예시 이미지" />
      <figcaption>Accessibility Reader 기능 예시<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/" title="[1] Apple Newsroom (2025-05-13)" data-cite="[1] Apple Newsroom (2025-05-13)" target="_blank" rel="noopener noreferrer">[1]</a></sup></figcaption>
    </figure>
    <figure class="anl-slide">
      <img src="https://www.apple.com/newsroom/images/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/article/Apple-accessibility-features-Magnifier-on-Mac_big.jpg.large.jpg" alt="Magnifier on Mac 기능 예시 이미지" />
      <figcaption>Magnifier on Mac 기능 예시<sup><a class="cite-ref" href="https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/" title="[1] Apple Newsroom (2025-05-13)" data-cite="[1] Apple Newsroom (2025-05-13)" target="_blank" rel="noopener noreferrer">[1]</a></sup></figcaption>
    </figure>
    <button type="button" class="anl-slider-arrow anl-slider-prev" data-slider-prev aria-label="이전 이미지">
      <span aria-hidden="true">‹</span>
    </button>
    <button type="button" class="anl-slider-arrow anl-slider-next" data-slider-next aria-label="다음 이미지">
      <span aria-hidden="true">›</span>
    </button>
  </div>
  <div class="anl-slider-footer">
    <p class="anl-slider-status" data-slider-status aria-live="polite"></p>
    <div class="anl-slider-dots" role="tablist" aria-label="이미지 선택">
      <button type="button" class="anl-slider-dot" data-slider-dot="0" aria-label="1번 이미지"></button>
      <button type="button" class="anl-slider-dot" data-slider-dot="1" aria-label="2번 이미지"></button>
      <button type="button" class="anl-slider-dot" data-slider-dot="2" aria-label="3번 이미지"></button>
      <button type="button" class="anl-slider-dot" data-slider-dot="3" aria-label="4번 이미지"></button>
    </div>
  </div>
</div>

### 입력하지 않으면 어떻게 보이는가

디바이스별 접근성 지원 정보를 아예 입력하지 않더라도 섹션 자체는 노출되며, "아직 지원 여부를 표시하지 않았다"는 문구가 나타난다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 경쟁 앱들이 이 라벨을 촘촘히 채우며 사용자 신뢰를 얻어갈 때, 빈 공간으로 남겨진 라벨은 우리 앱의 완성도에 대한 묵시적인 경고 메시지로 작동하게 된다.

## 핵심 개념: "공통 과업(Common Tasks)"의 정의

개발팀이 가장 혼란스러워하는 지점은 <em>"앱의 기능 1~2개에 VoiceOver가 적용되면 지원한다고 체크해도 되는가?"</em>이다. Apple은 이에 대해 명확히 선을 긋는다. 기능의 단순 존재 여부가 아니라, <strong>"앱의 공통 과업(Common Tasks)을 해당 접근성 기능으로 완수할 수 있는가"</strong>를 입증해야 한다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria/" title="[6] VoiceOver evaluation criteria" data-cite="[6] VoiceOver evaluation criteria" target="_blank" rel="noopener noreferrer">[6]</a></sup>

여기서 '공통 과업'이란 사용자가 앱을 설치한 핵심 목적(Core User Journey)을 의미한다. 
- 쇼핑몰 앱: 상품 검색 → 장바구니 담기 → 결제 완료
- 은행 앱: 잔액 조회 → 송금 완료

메인 화면만 VoiceOver로 완벽하게 읽어준다 한들, 정작 결제 창에서 조작이 막힌다면 이는 공통 과업을 완수한 것이 아니므로 '지원함'으로 표기해서는 안 된다.

### 공통 과업 체크리스트는 기본 화면보다 넓다

Apple은 공통 과업을 앱의 핵심 기능 몇 개로만 보지 않는다. 공식 문서에는 앱 고유의 주 기능 외에도 `첫 실행 경험`, `로그인`, `구매`, `설정`이 기본 체크리스트로 제시된다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 즉 "핵심 화면은 읽히지만 회원가입은 안 된다", "구매 전환 직전에서 보조기기 지원이 끊긴다" 같은 상태는 부분 성공이 아니라 라벨 표기 실패에 가깝다.

실무에서는 이 기준이 특히 중요하다. 서비스 운영자는 종종 제품 소개 화면이나 메인 탐색 화면의 완성도를 기준으로 접근성 지원 여부를 판단하려 하지만, Apple의 구조는 처음 진입부터 계정 생성, 결제, 설정 변경까지의 과업 단위를 훨씬 중시한다. 따라서 라벨 입력 전에 제품 기능 목록이 아니라 사용자 여정 목록을 먼저 만드는 방식으로 검증 순서를 바꾸는 편이 맞다.

### 애매하면 긴급 수정 기준으로 판단한다

Apple 문서에서 가장 실무적인 문장 중 하나는 "이 과업이 공통 과업인지 애매하다면, 사용자가 이 흐름에서 막혔을 때 긴급 수정(urgent fix)을 배포할 정도인지 스스로 물어보라"는 취지의 안내다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 이 기준을 적용하면 마케팅 링크나 부가 프로모션은 공통 과업에서 빠질 수 있지만, 회원가입, 인증, 결제, 구독 해지는 거의 예외 없이 포함된다.

이 문장은 조직 내 합의 기준으로 쓰기 좋다. 접근성 범위를 둘러싼 논쟁이 생길 때 "앱의 모든 화면을 다 해야 하는가" 같은 추상 논쟁 대신, "이 흐름이 막히면 긴급 장애로 취급하는가"라는 운영 질문으로 바꾸면 우선순위가 선명해진다. 결과적으로 공통 과업 정의는 접근성 철학 문제가 아니라 서비스 운영 기준과 직접 연결된다.

### 권장 방식: 기기별 접근성 테스트 매트릭스

Apple은 각 기기별로 접근성 테스트 매트릭스를 만드는 방식을 권장한다. 행에는 해당 기기에서 가능한 공통 과업을, 열에는 해당 기기에서 지원 판정이 가능한 접근성 기능을 넣는 방식이다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 어떤 과업은 Mac에만 있고 어떤 기능은 Apple Watch에서 아예 제공되지 않기 때문에, 하나의 통합 체크리스트로는 실제 판정 구조를 반영하기 어렵다.

이 접근은 모바일 환경에서 특히 유효하다. iPhone, iPad, Mac, Apple Vision Pro를 함께 지원하는 앱은 기능 노출과 UI 구조가 디바이스마다 다르기 쉽고, 그 차이가 그대로 라벨 판정 범위 차이로 이어진다. 따라서 접근성 검증 시트도 "앱 단위 1장"이 아니라 "디바이스별 검증 자산"으로 관리하는 편이 더 현실적이다.

## 통제 범위를 어디까지 볼 것인가

실무에서 가장 많이 나오는 질문은 "우리가 직접 만든 화면만 보면 되는가"이다. Apple 공식 문서는 여기에 대해 꽤 구체적인 경계 기준을 제시한다. 특히 서드파티 콘텐츠, 사용자 생성 콘텐츠, 광고, 앱 확장 같은 회색지대를 공통 과업 기준으로 다시 판단하라고 안내한다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

### 서드파티와 사용자 생성 콘텐츠

Apple은 서드파티 콘텐츠나 사용자 생성 콘텐츠가 공통 과업이 아니라면 라벨 평가에서 반드시 고려할 필요는 없다고 적는다. 반대로 그것이 공통 과업에 포함된다면, 앱이 모든 외부 콘텐츠를 완벽하게 접근 가능하게 만들어야 한다고 요구하지는 않지만, 콘텐츠 제공자가 접근 가능하게 만들 수 있는 합리적이고 발견 가능한 방법을 제공해야 한다고 본다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

이 기준은 사용자 참여형 플랫폼이나 커뮤니티 앱에 특히 중요하다. 예를 들어 사용자가 이미지를 올릴 수 있는 앱이라면, 업로드된 모든 이미지에 대체 텍스트가 들어가도록 플랫폼이 강제하거나 대필해야 한다는 뜻이 아니다. 핵심은 **콘텐츠 창작자 본인이 이미지를 올릴 때 '대체 텍스트를 입력할 수 있는 합리적인 UI 수단'을 앱이 제공하고 있는지** 여부다. 이 수단이 존재한다면, 사용자 생성 콘텐츠 영역에서도 해당 접근성 기준을 지원한다고 볼 수 있다.

### 앱 확장과 광고

앱 확장(App Extension)도 마찬가지다. Apple은 스티커, 커스텀 키보드, Safari 확장, 사진 편집 확장 같은 기능이 앱의 주된 사용 목적에 포함되는지 먼저 판단하라고 한다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 핵심 기능이 아니라면 공통 과업에서 제외될 수 있지만, 핵심 경험이라면 별도 예외 없이 평가 범위에 들어간다.

광고는 더 보수적으로 봐야 한다. Apple은 사용자가 공통 과업을 수행하는 도중 광고가 노출된다면 그것도 평가에 포함하라고 적고 있다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup> 예를 들어 전면 광고의 과도한 모션 때문에 사용자가 과업을 이어갈 수 없다면, Reduced Motion이나 VoiceOver 같은 라벨 지원 주장 자체가 흔들릴 수 있다. 이 지점은 광고 SDK 도입 시 접근성 검토가 빠지기 쉬운 모바일 앱에서 특히 자주 문제가 된다.

### 플랫폼별 예외 케이스

운영 관점에서 흥미로운 예외도 있다. Apple은 iPhone이나 iPad 앱이 Apple Vision Pro에서 호환 실행되는 경우, 별도의 Vision 응답이 필요하지 않고 iPhone 또는 iPad 라벨이 그대로 표시된다고 안내한다. Macs with Apple silicon에서 실행되는 호환 iPhone/iPad 앱도 Mac 전용 응답이 필요하지 않다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

이 내용은 작은 문장처럼 보이지만 운영상 함의가 크다. 모든 플랫폼에 동일하게 별도 응답을 작성하는 구조가 아니라, 실제 배포 방식과 디바이스 패밀리 구조에 따라 라벨 관리 단위가 달라진다는 뜻이기 때문이다. 따라서 앱 접근성 메타데이터도 배포 대상과 런타임 호환 방식까지 고려해 관리해야 한다.

## 역할별 실무 대응 방안

라벨 표기는 특정 직군의 단독 과제로 머물러선 안 된다. 부서 간 합의가 무너지면 허위 메타데이터가 기재되어 실제 사용자의 신뢰를 잃고, 심사 과정에서 반려나 수정 권고를 받을 수 있다.

### 기획 (Product Owner)
- **과업 정의:** 앱의 공통 과업(Core User Journey) 목록을 구체적으로 정의하고 문서화한다.
- **예외 관리:** 서드파티(3rd Party) 결제 모듈이나 외부 라이브러리 때문에 접근성이 끊기는 구간을 선제적으로 파악하고, 이를 우회할 대안이 있는지 점검한다.

### 디자인 (Design)
- **명도 대비 및 다크 모드:** Sufficient Contrast(충분한 대비) 라벨 획득을 위해 텍스트와 배경의 명도 대비를 4.5:1(WCAG AA) 이상으로 맞춘다. 다크 모드 설계 시 색상 반전에 그치지 않고 의미 체계(Semantic Color)를 함께 고려한다.
- **색상 의존성 탈피:** 오류나 성공 상태를 붉은색과 녹색 같은 색상만으로 구분하지 않고, 형태나 아이콘(Differentiate Without Color Alone)을 반드시 병기한다.

### 개발 및 QA (Engineering & QA)
- **종단 간(End-to-End) 테스트:** 기획이 정의한 공통 과업 흐름을 처음부터 끝까지 VoiceOver를 켠 상태로(화면을 보지 않고) 통과할 수 있는지 검증한다.
- **다이내믹 타입 대응:** 시스템 설정에서 텍스트 크기를 가장 크게(Larger Text) 키웠을 때, 버튼이 화면 밖으로 밀리거나 텍스트가 잘리는 현상(Truncation) 없이 스크롤과 줄바꿈이 정상적으로 동작하도록 레이아웃의 유연성을 확보한다.

## 라벨별 세부 판정 포인트

손쉬운 사용 취급 개요표는 표면적으로는 체크박스 구조이지만, 실제 판정 기준은 항목별로 꽤 다르다. 이 차이를 이해하지 못하면 "몇 개만 되는 것 같은데 일단 지원으로 표기하자"는 식의 위험한 단순화가 생긴다. 아래 항목들은 Apple 문서상 실무에서 특히 놓치기 쉬운 판정 포인트다.

### VoiceOver와 Voice Control의 순차적 평가

Apple은 접근성 기능들을 개별적으로 완전히 떼어놓고 보기보다는, **특정 순서대로 평가하는 것을 공식적으로 권장**한다. 특히 VoiceOver를 가장 먼저 평가하라고 조언하는데, VoiceOver 사용자를 위해 앱의 구조를 개선하는 작업(접근성 레이블 부여, 트레이트 설정 등)이 Voice Control과 같은 다른 보조 기술의 호환성도 자연스럽게 높여주기 때문이다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup>

따라서 음성 보조 기능을 검수할 때는 VoiceOver 기준으로 먼저 공통 과업을 완벽하게 통과시킨 뒤, 그 튼튼한 기반 위에서 Voice Control 특유의 조작 요건(`Show numbers`, `Show names` 등)을 추가로 확인하는 방식이 가장 효율적이다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria/" title="[6] VoiceOver evaluation criteria" data-cite="[6] VoiceOver evaluation criteria" target="_blank" rel="noopener noreferrer">[6]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voice-control-evaluation-criteria/" title="[11] App Store Connect Help: Voice Control evaluation criteria" data-cite="[11] App Store Connect Help: Voice Control evaluation criteria" target="_blank" rel="noopener noreferrer">[11]</a></sup>

### 더 큰 텍스트와 충분한 대비는 수치와 상태 조합으로 본다

Larger Text 항목은 반드시 Dynamic Type(동적 유형) 기술을 사용해야만 통과되는 것은 아니다. Apple은 Dynamic Type의 사용을 적극 권장하지만, **가장 중요한 기준은 구현 방식과 무관하게 본문 텍스트를 최소 200%까지(watchOS 앱은 최소 140%까지) 확대할 수 있는지 여부**다. 확대 시 화면이 깨지거나 잘리지 않아야 하며, Apple은 Zoom이나 Hover Text 같은 운영체제 보조 기능에 기대어 Larger Text 지원을 주장하지 말라고 분명히 선을 긋고 있다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/larger-text-evaluation-criteria/" title="[9] App Store Connect Help: Larger Text evaluation criteria" data-cite="[9] App Store Connect Help: Larger Text evaluation criteria" target="_blank" rel="noopener noreferrer">[9]</a></sup>

Sufficient Contrast는 보통 텍스트 대비 4.5:1을 기준으로 설명되지만, Apple은 여기서 멈추지 않는다. `Bold Text`, `Increase Contrast`, `Reduce Transparency`를 모두 켠 상태에서 공통 과업 UI를 보라고 하고, 비텍스트 상태 표현은 3:1 수준의 대비도 함께 고려하라고 한다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/sufficient-contrast-evaluation-criteria/" title="[10] App Store Connect Help: Sufficient Contrast evaluation criteria" data-cite="[10] App Store Connect Help: Sufficient Contrast evaluation criteria" target="_blank" rel="noopener noreferrer">[10]</a></sup> 즉 디자이너와 QA는 색상값 하나만 보는 것이 아니라, 시스템 접근성 설정 조합에서 인터페이스가 어떻게 변하는지를 같이 확인해야 한다.

### 다크 인터페이스, 색상 외 구분, 동작 줄이기는 조합 테스트가 핵심이다

Dark Interface 평가 시 명심해야 할 것은, 단순히 전체 테마를 어둡게 만드는 것으로 끝나지 않는다는 점이다. Apple은 가이드라인에서 **"밝은 콘텐츠가 순간적으로 나타나더라도 불편함을 유발할 수 있으므로, 인터페이스를 어둡게 하는 것뿐만 아니라, 어두워진 상태를 지속적으로 유지하는 것이 중요하다"**고 강조한다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/dark-interface-evaluation-criteria/" title="[12] App Store Connect Help: Dark Interface evaluation criteria" data-cite="[12] App Store Connect Help: Dark Interface evaluation criteria" target="_blank" rel="noopener noreferrer">[12]</a></sup> 또한 다크 인터페이스에서도 충분한 대비를 유지해야 하므로 `Increase Contrast` 설정과 함께 검사하라고 안내한다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/sufficient-contrast-evaluation-criteria/" title="[10] App Store Connect Help: Sufficient Contrast evaluation criteria" data-cite="[10] App Store Connect Help: Sufficient Contrast evaluation criteria" target="_blank" rel="noopener noreferrer">[10]</a></sup>

Differentiate Without Color Alone는 회색조(Grayscale) 필터로 먼저 테스트해 보라고 Apple이 직접 제안하는 항목이다. 오류와 성공, 선택과 비선택, 차트의 의미 구분을 오직 색으로만 전달하면 지원으로 표기하기 어렵다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/differentiate-without-color-alone-evaluation-criteria/" title="[13] App Store Connect Help: Differentiate Without Color Alone evaluation criteria" data-cite="[13] App Store Connect Help: Differentiate Without Color Alone evaluation criteria" target="_blank" rel="noopener noreferrer">[13]</a></sup> Reduced Motion도 마찬가지로 단순 애니메이션 유무가 아니라, 패럴랙스, 다축 모션, 스핀, 자동 진행 캐러셀 같은 트리거를 대체하거나 정지할 수 있는지가 핵심이다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria/" title="[14] App Store Connect Help: Reduced Motion evaluation criteria" data-cite="[14] App Store Connect Help: Reduced Motion evaluation criteria" target="_blank" rel="noopener noreferrer">[14]</a></sup>

### 자막과 음성 해설은 UI가 아니라 실제 콘텐츠 공급량까지 본다

Captions와 Audio Descriptions는 특히 콘텐츠 서비스에서 과장 표기가 많아질 위험이 큰 항목이다. Apple은 캡션 UI가 있거나 AD 선택 메뉴가 있다는 이유만으로 지원을 주장하지 말라고 본다. 자막을 표시하는 기능이 있어도 실제 캡션된 콘텐츠가 거의 없으면 `Supports Captions`로 표기하지 말라고 적고 있고, 오디오 설명도 동일한 논리로 본다.<sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/captions-evaluation-criteria/" title="[15] App Store Connect Help: Captions evaluation criteria" data-cite="[15] App Store Connect Help: Captions evaluation criteria" target="_blank" rel="noopener noreferrer">[15]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/audio-descriptions-evaluation-criteria/" title="[16] App Store Connect Help: Audio Descriptions evaluation criteria" data-cite="[16] App Store Connect Help: Audio Descriptions evaluation criteria" target="_blank" rel="noopener noreferrer">[16]</a></sup>

이 기준은 미디어 서비스뿐 아니라 게임, 교육 앱, 소셜 앱에도 적용된다. 컷신, 인터스티셜 영상, 사용자가 올린 비디오, 팟캐스트형 오디오 등 "보통 영상 플레이어가 아니니 제외되겠지"라고 생각하기 쉬운 영역도 공통 과업에 포함되면 평가 대상이 된다. 결국 미디어 라벨은 플레이어 기능 검수와 콘텐츠 공급 정책을 분리하지 말고 함께 보라는 뜻에 가깝다.

## 자주 하는 실수와 주의점

라벨 시스템이 새롭게 도입되면서, 단기적인 성과를 내기 위해 저지르는 전형적인 실수들이 있다. 이를 초기에 차단해야 실제 사용자의 신뢰 하락을 막고, Apple의 메타데이터 수정 요청 등의 운영 리스크를 예방할 수 있다.

### ❌ 잘못된 사례: 기능의 일부만 테스트하고 '지원함'으로 표기

메인 홈 화면과 설정 창 정도만 VoiceOver로 읽히는 것을 확인한 뒤 서둘러 '지원함'에 체크한다. 이후 사용자가 결제 같은 핵심 기능에서 막혀 App Store 리뷰에 악플을 남기거나 불편을 호소하게 된다.

### ❌ 잘못된 사례: 마케팅 부서가 개발 부서의 검증 없이 임의로 체크

앱의 검색 노출 빈도를 늘리기 위해 스토어 운영 담당자가 자의적으로 라벨 항목을 모두 활성화하여 게시한다. 의도치 않게 오해를 부를 수 있는 정보를 제공하는 것으로 간주되어 앱 심사 가이드라인 2.3(메타데이터의 정확성)에 따라 앱 심사팀으로부터 메타데이터 수정(업데이트) 권고를 받을 수 있다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/app-store/review/guidelines/" title="[5] App Review Guidelines" data-cite="[5] App Review Guidelines" target="_blank" rel="noopener noreferrer">[5]</a></sup>

### 🔵 권장하는 해결책: 코어 과업 중심의 E2E 및 '사용자 참여' 테스트 증거 확보

기획자가 정의한 '공통 과업' 시나리오를 바탕으로 종단 간(E2E) 테스트를 수행하되, 가급적 **실제 해당 보조기기(VoiceOver 등)를 사용하는 당사자(사용자)가 참여하는 테스트를 병행**하는 것을 강력히 권장한다. 내부 QA 및 실제 사용자의 교차 검증을 거쳐 확실한 증거(테스트 시트, 사용자 피드백 등)를 확보한 항목에 대해서만 라벨에 반영한다.

### 🔵 권장하는 해결책: 릴리스 체크리스트와 라벨 권한 동기화

라벨 입력 권한(App Manager 등)을 지닌 담당자를 명확히 하고, 릴리스 전 개발 및 QA 리드의 최종 승인을 거친 접근성 점검표 결과를 바탕으로만 App Store Connect 정보를 갱신하도록 프로세스를 통제한다.

## EAA를 해석할 때 과장하면 안 되는 부분

유럽접근성법(European Accessibility Act, EAA)을 글에 연결할 때는 범위를 넓게 뭉개지 않는 편이 좋다. Directive (EU) 2019/882의 적용 시점은 2025년 6월 28일이 맞지만, 적용 대상은 "모든 디지털 서비스"라고 뭉뚱그려 쓰기보다 전자상거래(e-commerce), 소비자 금융(consumer banking), 전자책(e-books), 전자통신 서비스, 시청각 미디어 접근 서비스 등 조문에 열거된 범주로 설명하는 편이 더 정확하다.<sup><a class="cite-ref" href="https://eur-lex.europa.eu/eli/dir/2019/882/oj" title="[7] European Accessibility Act (Directive 2019/882)" data-cite="[7] European Accessibility Act (Directive 2019/882)" target="_blank" rel="noopener noreferrer">[7]</a></sup><sup><a class="cite-ref" href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882" title="[19] Directive (EU) 2019/882 Article 2 scope" data-cite="[19] Directive (EU) 2019/882 Article 2 scope" target="_blank" rel="noopener noreferrer">[19]</a></sup>

또 하나 중요한 점은 예외다. 이 지침은 서비스 분야의 마이크로기업(microenterprises)에 대해서는 의무를 적용하지 않는 구조를 두고 있고, 일부 영역은 공공부문 웹 접근성 규정이나 기존 운송·통신 규정과 맞물려 해석된다.<sup><a class="cite-ref" href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882" title="[19] Directive (EU) 2019/882 Article 2 scope" data-cite="[19] Directive (EU) 2019/882 Article 2 scope" target="_blank" rel="noopener noreferrer">[19]</a></sup> 따라서 Apple의 라벨 도입을 EAA "준수 인증"처럼 직접 등치시키는 표현은 과하고, 더 정확한 표현은 "플랫폼 차원에서 접근성 상태를 외부에 공개하고 설명하는 메타데이터 장치"라고 보는 쪽이다.

## 실무 체크리스트

App Store Connect에 라벨을 섣불리 게시하기 전, 조직 내에서 아래 항목이 합의되고 검증되었는지 반드시 확인해야 한다.

- [ ] App Store Connect 내 라벨 운영 책임자와 권한(App Manager 등)을 명확히 지정했다.
- [ ] 우리 앱의 핵심 목적이 되는 '공통 과업(Common Tasks)' 시나리오를 명문화했다.
- [ ] 정의된 공통 과업을 기준으로 기능별 평가(VoiceOver, Larger Text 등)를 엄격하게 수행했다.
- [ ] 기기별 공통 과업 x 접근성 기능 테스트 매트릭스를 작성했다.
- [ ] 라벨 입력 전 검증 증거(테스트 시트, 사용자 피드백 등)를 내부 자산으로 보관했다.
- [ ] 서드파티 콘텐츠, 광고, 앱 확장, 사용자 생성 콘텐츠의 평가 포함 여부를 문서화했다.
- [ ] 서드파티 모듈 등 우리가 제어할 수 없는 접근성 제한 사항을 솔직하게 명시한 '접근성 안내 URL'을 작성하여 제품 페이지에 연결했다.
- [ ] App Store Connect 게시 직후와 24시간 후, 기기별 노출 상태를 재확인하는 루틴을 마련했다.
- [ ] 대규모 업데이트 릴리스 시, 라벨 재평가 항목을 QA 체크리스트에 정식으로 포함시켰다.
- [ ] 유럽접근성법(EAA) 적용 대상 서비스 여부와 예외 범위를 별도로 검토했다.

## 마무리

손쉬운 사용 취급 개요표(Accessibility Nutrition Labels)는 접근성을 "앱을 켜봐야 아는 좋은 옵션"에서 "다운로드 전에 공개 검증 가능한 제품 정보"로 완전히 옮겨 놓았다. 이제 접근성을 개발 파트의 선의나 릴리스 후의 부가 과제로 취급하는 시대는 끝났다. 이는 제품의 발견성(Discoverability)과 글로벌 컴플라이언스와 직결되는 핵심 메타데이터다.

의사결정 포인트는 지극히 단순하다. **먼저 검증하고, 그다음 공개한다.** 당장 완벽하게 지원하지 못하는 부분이 있다면 숨기거나 거짓으로 체크하는 대신, 접근성 안내 URL을 통해 솔직하게 소통하며 점진적으로 개선해 나가야 한다. 이 원칙을 굳게 지킨다면 이 라벨은 단순한 규제 부담이 아니라 우리 앱의 신뢰도를 한 차원 높이는 강력한 자산이 될 것이다.

## 참고 자료

1. Apple Newsroom (2025-05-13), Apple unveils powerful accessibility features coming later this year: https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/
2. Apple Newsroom (2025-06-09), Apple supercharges its tools and technologies for developers: https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/
3. App Store Connect 도움말, 손쉬운 사용 취급 개요표에 대한 개요(Overview of Accessibility Nutrition Labels): https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels
4. App Store Connect Help, Manage Accessibility Nutrition Labels: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/manage-accessibility-nutrition-labels/
5. Apple Developer, App Review Guidelines (2.3 Accurate Metadata): https://developer.apple.com/app-store/review/guidelines/
6. App Store Connect Help, VoiceOver evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria/
7. European Accessibility Act (Directive 2019/882, Article 31(2)): https://eur-lex.europa.eu/eli/dir/2019/882/oj
8. Apple Developer Documentation, App Store Connect API: https://developer.apple.com/documentation/appstoreconnectapi
9. App Store Connect Help, Larger Text evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/larger-text-evaluation-criteria/
10. App Store Connect Help, Sufficient Contrast evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/sufficient-contrast-evaluation-criteria/
11. App Store Connect Help, Voice Control evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voice-control-evaluation-criteria/
12. App Store Connect Help, Dark Interface evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/dark-interface-evaluation-criteria/
13. App Store Connect Help, Differentiate Without Color Alone evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/differentiate-without-color-alone-evaluation-criteria/
14. App Store Connect Help, Reduced Motion evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria/
15. App Store Connect Help, Captions evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/captions-evaluation-criteria/
16. App Store Connect Help, Audio Descriptions evaluation criteria: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/audio-descriptions-evaluation-criteria/
17. Apple Developer Documentation, Configuring accessibility declarations for your app: https://developer.apple.com/documentation/appstoreconnectapi/configuring-accessibility-declarations
18. Apple Developer Documentation, List all accessibility declarations for an app: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-accessibilitydeclarations
19. Directive (EU) 2019/882, Article 2 scope: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882