/**
 * @description authApi는 사용자 인증 관련 API를 담당하는 API 함수입니다.
 * - signUp: 회원가입 API를 호출하는 함수
 * - login: 로그인 API를 호출하는 함수
 */

// entities layers
import type { SignUpRequest, SignUpResponse, LoginRequest, LoginResponse } from '../model';
// shared layers
import { axiosInstance } from '@/shared';

export const authApi = {
  signUp: async (data: SignUpRequest): Promise<SignUpResponse> => {
    const response = await axiosInstance.post('/api/members/signup', data);
    return response.data;
  },
  // NOTE: 로그인 API
  // - props(data) type으로 email, password를 받는다.
  // - axiosInstance를 사용하여 API 호출
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/api/auth/login', data, { withCredentials: true });
    return response.data;
  },
};
