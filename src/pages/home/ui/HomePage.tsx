/**
 * @description 홈페이지 UI (페이지 진입 시 홈 화면)
 * - 숙소 리스트 표시
 */

import { useRooms } from '@/entities/room';
import { RoomCarousel } from '@/widgets/room';

export const HomePage = () => {
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

  // NOTE: 예시 날짜 (실제로는 예약이 비어있는 날짜를 사용)
  // 동적으로 날짜 생성하여 오타 방지
  const today = new Date();
  const checkInDateObj = new Date(today);
  checkInDateObj.setDate(today.getDate() + 7); // 오늘로부터 7일 후
  const checkOutDateObj = new Date(checkInDateObj);
  checkOutDateObj.setDate(checkInDateObj.getDate() + 2); // 체크인 날짜로부터 2일 후

  const formatDateForAPI = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const checkInDate = formatDateForAPI(checkInDateObj);
  const checkOutDate = formatDateForAPI(checkOutDateObj);
  const nights = 2;

  return (
    <div className="container mx-auto px-4 py-8">
      <RoomCarousel
        title="서울의 인기 숙소"
        rooms={data}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        nights={nights}
      />
    </div>
  );
}

