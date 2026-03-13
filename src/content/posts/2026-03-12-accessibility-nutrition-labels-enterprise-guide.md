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

개발팀이 가장 혼란스러워하는 지점은 *"앱의 기능 1~2개에 VoiceOver가 적용되면 지원한다고 체크해도 되는가?"*이다. Apple은 이에 대해 명확히 선을 긋는다. 기능의 단순 존재 여부가 아니라, **"앱의 공통 과업(Common Tasks)을 해당 접근성 기능으로 완수할 수 있는가"**를 입증해야 한다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria/" title="[6] VoiceOver evaluation criteria" data-cite="[6] VoiceOver evaluation criteria" target="_blank" rel="noopener noreferrer">[6]</a></sup>

여기서 '공통 과업'이란 사용자가 앱을 설치한 핵심 목적(Core User Journey)을 의미한다. 
- 쇼핑몰 앱: 상품 검색 → 장바구니 담기 → 결제 완료
- 은행 앱: 잔액 조회 → 송금 완료

메인 화면만 VoiceOver로 완벽하게 읽어준다 한들, 정작 결제 창에서 조작이 막힌다면 이는 공통 과업을 완수한 것이 아니므로 '지원함'으로 표기해서는 안 된다.

## 역할별 실무 대응 방안

라벨 표기는 특정 직군의 단독 과제로 머물러선 안 된다. 부서 간 합의가 무너지면 허위 메타데이터가 기재되어 최악의 경우 앱 심사(App Review) 거절로 이어질 수 있다.

### 기획 (Product Owner)
- **과업 정의:** 앱의 공통 과업(Core User Journey) 목록을 구체적으로 정의하고 문서화한다.
- **예외 관리:** 서드파티(3rd Party) 결제 모듈이나 외부 라이브러리 때문에 접근성이 끊기는 구간을 선제적으로 파악하고, 이를 우회할 대안이 있는지 점검한다.

### 디자인 (Design)
- **명도 대비 및 다크 모드:** Sufficient Contrast(충분한 대비) 라벨 획득을 위해 텍스트와 배경의 명도 대비를 4.5:1(WCAG AA) 이상으로 맞춘다. 다크 모드 설계 시 색상 반전에 그치지 않고 의미 체계(Semantic Color)를 함께 고려한다.
- **색상 의존성 탈피:** 오류나 성공 상태를 붉은색과 녹색 같은 색상만으로 구분하지 않고, 형태나 아이콘(Differentiate Without Color Alone)을 반드시 병기한다.

### 개발 및 QA (Engineering & QA)
- **종단 간(End-to-End) 테스트:** 기획이 정의한 공통 과업 흐름을 처음부터 끝까지 VoiceOver를 켠 상태로(화면을 보지 않고) 통과할 수 있는지 검증한다.
- **다이내믹 타입 대응:** 시스템 설정에서 텍스트 크기를 가장 크게(Larger Text) 키웠을 때, 버튼이 화면 밖으로 밀리거나 텍스트가 잘리는 현상(Truncation) 없이 스크롤과 줄바꿈이 정상적으로 동작하도록 레이아웃의 유연성을 확보한다.
- **API를 통한 릴리스 자동화:** 다국어 메타데이터를 관리하는 엔터프라이즈 환경에서는 수동 입력의 휴먼 에러를 막기 위해 **App Store Connect API**를 활용한 자동화 파이프라인 구축을 권장한다.<sup><a class="cite-ref" href="https://developer.apple.com/documentation/appstoreconnectapi" title="[8] Apple Developer Documentation, App Store Connect API" data-cite="[8] Apple Developer Documentation, App Store Connect API" target="_blank" rel="noopener noreferrer">[8]</a></sup> CI/CD 과정에서 테스트 통과 여부에 따라 라벨 메타데이터가 안전하게 갱신되도록 연동하는 것이 좋다.

## 자주 하는 실수와 주의점

라벨 시스템이 새롭게 도입되면서, 단기적인 성과를 내기 위해 저지르는 전형적인 실수들이 있다. 이를 초기에 차단해야 메타데이터 심사 거절(App Review Rejection) 리스크를 예방할 수 있다.

### ❌ 잘못된 사례: 기능의 일부만 테스트하고 '지원함'으로 표기

메인 홈 화면과 설정 창 정도만 VoiceOver로 읽히는 것을 확인한 뒤 서둘러 '지원함'에 체크한다. 이후 사용자가 결제 같은 핵심 기능에서 막혀 App Store에 악플을 남기거나 신고하게 된다.

### ❌ 잘못된 사례: 마케팅 부서가 개발 부서의 검증 없이 임의로 체크

앱의 검색 노출 빈도를 늘리기 위해 스토어 운영 담당자가 자의적으로 라벨 항목을 모두 활성화하여 게시한다. 이는 Apple의 정확한 메타데이터 원칙(App Review Guideline 2.3) 위반으로 간주되어 강력한 제재를 받을 수 있다.<sup><a class="cite-ref" href="https://developer.apple.com/kr/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels" title="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" data-cite="[3] App Store Connect 도움말: 손쉬운 사용 취급 개요표에 대한 개요 (Overview of Accessibility Nutrition Labels)" target="_blank" rel="noopener noreferrer">[3]</a></sup><sup><a class="cite-ref" href="https://developer.apple.com/app-store/review/guidelines/" title="[5] App Review Guidelines" data-cite="[5] App Review Guidelines" target="_blank" rel="noopener noreferrer">[5]</a></sup>

### 🔵 권장하는 해결책: 코어 과업 중심의 E2E 테스트 증거 확보

기획자가 정의한 '공통 과업' 시나리오를 QA가 처음부터 끝까지 수행한 후, 그 결과(테스트 시트나 녹화 영상)를 확실한 증거로 확보한 항목에 대해서만 라벨에 반영한다.

### 🔵 권장하는 해결책: 릴리스 체크리스트와 라벨 권한 동기화

라벨 입력 권한(App Manager 등)을 지닌 담당자를 명확히 하고, 릴리스 전 개발 및 QA 리드의 최종 승인을 거친 접근성 점검표 결과를 바탕으로만 App Store Connect 정보를 갱신하도록 프로세스를 통제한다.

## 실무 체크리스트

App Store Connect에 라벨을 섣불리 게시하기 전, 조직 내에서 아래 항목이 합의되고 검증되었는지 반드시 확인해야 한다.

- [ ] App Store Connect 내 라벨 운영 책임자와 권한(App Manager 등)을 명확히 지정했다.
- [ ] 우리 앱의 핵심 목적이 되는 '공통 과업(Common Tasks)' 시나리오를 명문화했다.
- [ ] 정의된 공통 과업을 기준으로 기능별 평가(VoiceOver, Larger Text 등)를 엄격하게 수행했다.
- [ ] 라벨 입력 전 검증 증거(테스트 시트, 이슈 트래킹 링크 등)를 내부 자산으로 보관했다.
- [ ] 서드파티 모듈 등 우리가 제어할 수 없는 접근성 제한 사항을 솔직하게 명시한 '접근성 안내 URL'을 작성하여 제품 페이지에 연결했다.
- [ ] App Store Connect 게시 직후와 24시간 후, 기기별 노출 상태를 재확인하는 루틴을 마련했다.
- [ ] 대규모 업데이트 릴리스 시, 라벨 재평가 항목을 QA 체크리스트에 정식으로 포함시켰다.

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
