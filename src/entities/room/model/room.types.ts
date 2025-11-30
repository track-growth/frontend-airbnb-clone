/**
 * @file room.types.ts
 * @description 숙소(Room) 관련 type
 */

// NOTE: DB 스키마 기반 타입
export interface Room {
  roomID: number;
  hostID: number;
  roomName: string;
  roomAddress: string;
  roomPrice: number; // 1박당 비용
  roomDescription: string;
  checkInTime: string; // TIME 형식 (예: "15:00:00")
  checkOutTime: string; // TIME 형식 (예: "11:00:00")
  createdAt: string; // TIMESTAMP 형식
}

// NOTE: API response type (UI 표시를 위한 추가 필드 포함)
export interface RoomResponse extends Room {
  // NOTE: UI 표시를 위한 추가 필드 (별도 테이블 또는 계산된 값)
  imageUrl?: string; // 이미지 URL (별도 테이블 또는 기본값)
  rating?: number; // 평점 (별도 테이블에서 계산)
  reviewCount?: number; // 리뷰 개수 (별도 테이블에서 계산)
  isGuestFavorite?: boolean; // 게스트 선호 여부 (계산된 값)
}

export interface RoomListResponse {
  rooms: RoomResponse[];
  total: number;
}

