/**
 * @file RoomCard.tsx
 * @description 숙소(Room) 카드 컴포넌트
 */

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import type { RoomListItem } from '@/entities/room';

interface RoomCardProps {
  room: RoomListItem;
  checkInDate?: string; // 응답값의 체크인 날짜 (예: "2025-11-20")
  checkOutDate?: string; // 응답값의 체크아웃 날짜 (예: "2025-11-22")
  nights?: number; // 선택 가능한 숙박 일수
}

export const RoomCard = ({ room, checkInDate, checkOutDate, nights }: RoomCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return `${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일`;
  };


  return (
    <div className="flex-shrink-0 w-room-card cursor-pointer group">
      <div className="relative">
        {/* NOTE: 숙소 이미지 */}
        <div className="relative w-full h-room-card rounded-2xl overflow-hidden">
          <img
            src={room.imageUrl || 'https://via.placeholder.com/800x600'}
            alt={room.roomName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* NOTE: 게스트 선호 배지 */}
          {room.isGuestFavorite && (
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md text-xs font-semibold">
              게스트 선호
            </div>
          )}

          {/* NOTE: 하트 아이콘 (좋아요) */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            aria-label="좋아요"
          >
            <FaHeart className={isLiked ? 'text-red-500 fill-red-500' : 'text-gray-700'} />
          </button>
        </div>

        {/* NOTE: 숙소 정보 */}
        <div className="mt-3 pl-0 -ml-0.5">
          <h3 className="font-semibold text-gray-900 truncate">{room.roomName}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {checkInDate && checkOutDate
              ? `${formatDate(checkInDate)}~${formatDate(checkOutDate)}`
              : '날짜를 선택해주세요'}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className="font-semibold text-gray-900">
              ₩{formatPrice(room.roomPrice)}
            </span>
            {nights && <span className="text-gray-600">· {nights}박</span>}
            {room.rating && (
              <span className="flex items-center gap-1 text-gray-900">
                <span className="text-red-500">★</span>
                <span className="font-semibold">{room.rating}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

