/**
 * @file RoomCard.tsx
 * @description 숙소(Room) 카드 컴포넌트
 */

import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import type { RoomResponse } from '@/entities/room';

interface RoomCardProps {
  room: RoomResponse;
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
    const d = new Date(date);
    return `${d.getMonth() + 1}월 ${d.getDate()}일`;
  };

  const formatTime = (time: string) => {
    // TIME 형식 (예: "15:00:00")을 "오후 3시" 형식으로 변환
    const [hours] = time.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? '오후' : '오전';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${period} ${displayHour}시`;
  };

  return (
    <div className="flex-shrink-0 w-[220px] cursor-pointer group">
      <div className="relative">
        {/* NOTE: 숙소 이미지 */}
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden">
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
            onClick={(e) => {
              e.stopPropagation();
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
              : `체크인: ${formatTime(room.checkInTime)} · 체크아웃: ${formatTime(room.checkOutTime)}`}
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

