/**
 * @description 개발 환경에서 사용할 mock 데이터
 * - 메인 화면 숙소 목록 API 응답 구조에 맞춰 실제 사용하는 필드만 포함
 * - 제외된 필드: hostID, roomDescription, checkInTime, checkOutTime, createdAt, reviewCount
 */

import type { RoomListResponse } from '../model';

export const mockRooms: RoomListResponse = {
  rooms: [
    {
      roomID: 1,
      roomName: '강서구의 집',
      roomAddress: '강서구, 서울',
      roomPrice: 302412,
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      rating: 5.0,
      isGuestFavorite: true,
    },
    {
      roomID: 2,
      roomName: 'Bang-bae-bon-dong의 아파트',
      roomAddress: '방배본동, 서울',
      roomPrice: 467561,
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      rating: 5.0,
      isGuestFavorite: true,
    },
    {
      roomID: 3,
      roomName: '서울의 집',
      roomAddress: '서울',
      roomPrice: 233941,
      imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
      rating: 5.0,
      isGuestFavorite: false,
    },
    {
      roomID: 4,
      roomName: '서울의 집',
      roomAddress: '서울',
      roomPrice: 837624,
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      rating: 5.0,
      isGuestFavorite: true,
    },
    {
      roomID: 5,
      roomName: '서울의 집',
      roomAddress: '서울',
      roomPrice: 261900,
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      rating: 5.0,
      isGuestFavorite: true,
    },
    {
      roomID: 6,
      roomName: '종로구의 집',
      roomAddress: '종로구, 서울',
      roomPrice: 357338,
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      rating: 4.94,
      isGuestFavorite: true,
    },
    {
      roomID: 7,
      roomName: '서울의 집',
      roomAddress: '서울',
      roomPrice: 395988,
      imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop',
      rating: 5.0,
      isGuestFavorite: false,
    },
  ],
  total: 7,
};


