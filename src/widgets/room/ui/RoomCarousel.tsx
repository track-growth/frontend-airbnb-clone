/**
 * @file RoomCarousel.tsx
 * @description 숙소(Room) 캐러셀 컴포넌트
 */

import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import type { RoomResponse } from '@/entities/room';
import { RoomCard } from './RoomCard';
import './roomCarousel.css';

interface RoomCarouselProps {
  title: string;
  rooms: RoomResponse[];
  checkInDate?: string; // 응답값의 체크인 날짜
  checkOutDate?: string; // 응답값의 체크아웃 날짜
  nights?: number; // 선택 가능한? 숙박 일수
}

export const RoomCarousel = ({
  title,
  rooms,
  checkInDate,
  checkOutDate,
  nights,
}: RoomCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 400;
    const newScrollLeft =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
    );
  };

  return (
    <section className="mb-12">
      {/* NOTE: 섹션 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <IoIosArrowForward className="text-gray-600" />
        </div>

        {/* NOTE: 네비게이션 버튼 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border transition-colors ${
              canScrollLeft
                ? 'border-gray-300 hover:border-gray-900'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="이전"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border transition-colors ${
              canScrollRight
                ? 'border-gray-300 hover:border-gray-900'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="다음"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* NOTE: 캐러셀 컨테이너 */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
      >
        {rooms.map((room) => (
          <RoomCard
            key={room.roomID}
            room={room}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            nights={nights}
          />
        ))}
      </div>
    </section>
  );
};


