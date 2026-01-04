/**
 * @description useRooms는 숙소(Room) 목록을 조회하는 React Query hook입니다.
 */

import { useQuery } from '@tanstack/react-query';
// entities layers
import { roomApi } from './roomApi';

export const useRooms = () => {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: roomApi.getRooms,
  });
};

