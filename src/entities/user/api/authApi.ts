// entities layers
import type { SignUpRequest, SignUpResponse } from '../model';
// shared layers
import { axiosInstance } from '@/shared';

export const authApi = {
  signUp: async (data: SignUpRequest): Promise<SignUpResponse> => {
    const response = await axiosInstance.post('/api/members/signup', data);
    return response.data;
  },
};
