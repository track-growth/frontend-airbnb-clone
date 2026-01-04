# Room 및 RoomCarousel 개발 문서

## 체크 리스트
- [ ] 애플리케이션이 정상적으로 실행되나요? (yarn start)
- [ ] 빌드가 정상적으로 동작하나요? (yarn build)
- [ ] Push 되지 않은 내역은 없나요?

## 구현 설명

### Room 엔티티 구조 생성
- `entities/accommodation`을 `entities/room`으로 변경하여 DB 스키마와 일치하도록 구조 개선
- DB 스키마 기반 `Room` 타입 정의 (roomID, hostID, roomName, roomAddress, roomPrice, roomDescription, checkInTime, checkOutTime, createdAt)
- UI 표시를 위한 `RoomResponse` 타입 정의 (imageUrl, rating, reviewCount, isGuestFavorite 추가 필드 포함)
- `RoomListResponse` 타입으로 API 응답 구조 정의

### Room API 구현
- `roomApi.getRooms()` 함수 구현: `/api/rooms` 엔드포인트 호출
- `useRooms()` React Query hook 구현: 숙소 목록 조회 및 캐싱 처리
- Mock 데이터 추가: 개발 환경에서 사용할 7개의 샘플 숙소 데이터 포함
- 환경 변수 기반 Mock 데이터 사용 로직 구현 (VITE_USE_MOCK_DATA 또는 VITE_API_BASE_URL 설정에 따라 자동 전환)

### RoomCard 컴포넌트 구현
- 숙소 이미지 표시 (220px × 220px, 호버 시 확대 효과)
- 게스트 선호 배지 표시 (isGuestFavorite가 true일 때)
- 좋아요 기능 (하트 아이콘 클릭 시 상태 변경)
- 숙소 정보 표시:
  - 숙소명 (roomName)
  - 체크인/체크아웃 날짜 또는 시간 표시
  - 가격 포맷팅 (천 단위 구분)
  - 숙박 일수 표시
  - 평점 표시 (rating이 있을 경우)
- 가격 포맷팅 함수: `Intl.NumberFormat`을 사용한 한국어 형식
- 날짜/시간 포맷팅 함수: 체크인/체크아웃 시간을 "오전/오후 N시" 형식으로 변환

### RoomCarousel 컴포넌트 구현
- 가로 스크롤 캐러셀 구현: 숙소 카드를 가로로 나열하여 표시
- 좌우 네비게이션 버튼: 스크롤 위치에 따라 활성화/비활성화 처리
- 스크롤 상태 관리: `useRef`와 `useState`를 사용한 스크롤 위치 추적
- 부드러운 스크롤 애니메이션: `scrollTo` 메서드의 `behavior: 'smooth'` 옵션 사용
- 스크롤바 숨김 처리: CSS 클래스 `scrollbar-hide` 적용
- 섹션 헤더: 제목과 화살표 아이콘 표시

### HomePage 통합
- `HomePage` 컴포넌트에서 `useRooms()` hook을 사용하여 숙소 데이터 조회
- 로딩 상태 처리: 데이터 로딩 중 "로딩 중..." 메시지 표시
- 에러 상태 처리: 데이터 조회 실패 시 에러 메시지 표시
- `RoomCarousel` 컴포넌트에 숙소 데이터 전달 및 체크인/체크아웃 날짜, 숙박 일수 props 전달

### 스타일링
- Tailwind CSS를 사용한 반응형 디자인
- 카드 크기: 220px 너비, 220px 높이 이미지
- 호버 효과: 이미지 확대 애니메이션 (scale-105)
- 숙박 정보 레이아웃: 왼쪽 정렬 및 적절한 간격 조정

## 추가 설명

### Mock 데이터 사용 방법
- 개발 환경에서 Mock 데이터를 사용하려면 `.env` 파일에 다음 중 하나를 설정:
  - `VITE_USE_MOCK_DATA=true`
  - `VITE_API_BASE_URL=false` (또는 설정하지 않음)
- Mock 데이터는 `src/entities/room/api/mockData.ts`에 정의되어 있으며, 실제 API 호출처럼 보이도록 500ms 지연 시간이 포함되어 있습니다.

### API 엔드포인트
- 실제 API 사용 시: `GET /api/rooms`
- 응답 형식: `{ rooms: RoomResponse[], total: number }`

### 컴포넌트 사용 예시
```tsx
import { RoomCarousel } from '@/widgets/room';

<RoomCarousel
  title="서울의 인기 숙소"
  rooms={rooms}
  checkInDate="2025-11-20"
  checkOutDate="2025-11-22"
  nights={2}
/>
```

### 주요 파일 구조
- `src/entities/room/model/room.types.ts`: 타입 정의
- `src/entities/room/api/roomApi.ts`: API 함수
- `src/entities/room/api/useRooms.ts`: React Query hook
- `src/entities/room/api/mockData.ts`: Mock 데이터
- `src/widgets/room/ui/RoomCard.tsx`: 숙소 카드 컴포넌트
- `src/widgets/room/ui/RoomCarousel.tsx`: 캐러셀 컴포넌트
- `src/pages/home/ui/HomePage.tsx`: 홈 페이지


