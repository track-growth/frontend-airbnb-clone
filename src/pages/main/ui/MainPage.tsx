/**
 * @description 메인페이지 UI (페이지 진입 시 메인 화면)
 * - 숙소 리스트 표시
 */

import { useRooms } from '@/entities/room';
import { RoomCarousel } from '@/widgets/room';

export const MainPage = () => {
  const { data, isLoading, isError } = useRooms();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">로딩 중...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">숙소 정보를 불러오는데 실패했습니다.</div>
      </div>
    );
  }

  // NOTE: 예시 날짜 (실제로는 예약이 비어있는  날짜를 사용)
  const checkInDate = '2025-11-20';
  const checkOutDate = '2025-11-22';
  const nights = 2;

  return (
    <div className="container mx-auto px-4 py-8">
      <RoomCarousel
        title="서울의 인기 숙소"
        rooms={data.rooms}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        nights={nights}
      />
    </div>
  );
}

