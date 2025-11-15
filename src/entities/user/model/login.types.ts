/**
 * @file login.types.ts
 * @description 로그인 관련 type & zod schema
 */

import { z } from 'zod';

// NOTE: 로그인 form zod schema
export const loginSchema = z.object({
  email: z.string().trim().email('올바른 이메일 형식을 입력해주세요'),
  password: z
    .string()
    .trim()
    .min(1, '비밀번호를 입력해주세요'),
});

// NOTE: 로그인 form type
export type LoginFormData = z.infer<typeof loginSchema>;

// NOTE: API request/response type
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  nickname: string;
  lastLoginAt: string;
}


