# mCard

간단한 카드 서비스 웹앱

## 📚 소개
**mCard**는 카드 신청, 조회, 상세 확인 등 주요 카드 서비스 기능을 제공하는 웹 애플리케이션입니다. React, TypeScript, Firebase를 기반으로 구축되었으며, 사용자 친화적인 UI/UX와 성능 최적화를 목표로 개발되었습니다.

## 🚀 주요 기능
- 공통 스타일 및 컴포넌트 구축 (Button, Input, Alert 등)
- 카드 리스트 및 상세 페이지 구현 (무한 스크롤, Swiper 적용)
- 카드 신청 프로세스 (Firestore 저장 및 상태 폴링 처리)
- 회원가입, 로그인, 인증/인가 처리 (AuthGuard)
- 내 정보 페이지 (프로필 이미지 업로드 기능)
- 트리쉐이킹 최적화 및 번들 분석 (webpack-bundle-analyzer)
- 레이아웃 쉬프트 방지 및 성능 개선 (스켈레톤 UI 적용)
- 지치지 않는 지원 프로세스 UX 개선 (ProgressBar)
- 우선순위 렌더링 및 Lazy Loading 최적화 (Intersection Observer 활용)

## 🛠️ 기술 스택
- **Frontend**: React, TypeScript, Emotion, React Query, Recoil
- **Backend / Storage**: Firebase Firestore, Firebase Authentication
- **Animation**: Framer Motion
- **Build**: Vite, Webpack
- **Etc**: Swiper, React Intersection Observer

## 🗂️ 프로젝트 구조
```
/src
├── components
│   ├── common (Button, Input, Text 등 공통 컴포넌트)
│   ├── card (CardList, CardDetail 등)
│   └── layout (Dimmed, ScrollTop, ProgressBar)
├── hooks (Custom Hooks)
├── pages (메인 페이지, 카드 상세, 로그인/회원가입 등)
├── store (Recoil 상태 관리)
├── styles (GlobalStyles, ColorPalette)
├── utils (API 호출, Form Validation 등)
└── services (Firebase 연동 로직)
```

## ✨ 핵심 구현 내용 요약
### 공통 스타일/컴포넌트 구축
- Emotion을 사용한 GlobalStyles, ColorPalette 정리
- Button, Text, Input, Flex 등 재사용성 높은 컴포넌트 개발

### 카드 리스트/상세 페이지 구현
- 무한 스크롤(Infinite Scroll) 구현 (React Query useInfiniteQuery)
- Swiper.js를 활용한 카드 슬라이드 UI
- Props Drilling 개선: 컴포넌트 합성 패턴 적용
- 카드 상세 페이지 이동 시 스크롤 최상단 이동

### 카드 신청 기능
- Firestore에 신청 정보 저장
- 폴링(Polling) 방식으로 카드 발급 상태 확인 및 UI 갱신
- 상태에 따라 사용자 라우팅 처리 (성공 → 내정보, 거절 → 카드상세)

### 인증 및 전역 상태 관리
- Firebase Authentication 기반 회원가입/로그인 처리
- Recoil을 활용한 로그인 상태 및 사용자 데이터 관리
- AuthGuard로 비인증 사용자 페이지 접근 제한

### 성능 최적화
- Lodash 함수별 개별 import로 트리쉐이킹 최적화
- Webpack Bundle Analyzer로 번들 크기 관리
- Skeleton UI를 통한 CLS(Cumulative Layout Shift) 개선
- Intersection Observer로 Lazy Loading 및 우선순위 렌더링 적용

## 🛡️ 품질 개선 노력
- React Suspense + React Query를 조합하여 안정적인 데이터 로드
- 불필요한 코드 제거 및 병목 구간 성능 최적화
- UX 개선을 위해 진행 상태 표시 및 명확한 피드백 제공

[//]: # (## 📈 Lighthouse 점수 목표)
[//]: # (- Performance: 90 이상)
[//]: # (- Accessibility: 90 이상)
[//]: # (- Best Practices: 90 이상)
[//]: # (- SEO: 90 이상)
