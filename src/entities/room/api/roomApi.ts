/**
 * @description roomApi는 숙소(Room) 관련 API를 담당하는 API 함수입니다.
 * - getRooms: 숙소 목록을 조회하는 함수
 */

// entities layers
import type { RoomListResponse } from '../model';
// shared layers
import { axiosInstance } from '@/shared';
import { mockRooms } from './mockData';

// NOTE: 개발 환경에서 mock 데이터 사용 여부 (환경 변수로 제어 가능)
const USE_MOCK_DATA =
  import.meta.env.VITE_USE_MOCK_DATA === 'true' ||
  !import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_BASE_URL === 'false';

export const roomApi = {
  getRooms: async (): Promise<RoomListResponse> => {
    // NOTE: mock 데이터 사용 시
    if (USE_MOCK_DATA) {
      // NOTE: 실제 API 호출처럼 보이도록 약간의 지연 시간 추가
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockRooms;
    }

    // NOTE: 실제 API 호출
    const response = await axiosInstance.get('/api/rooms');
    return response.data;
  },
};

