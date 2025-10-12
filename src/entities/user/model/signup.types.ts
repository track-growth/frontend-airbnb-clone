/**
 * @file types.ts
 * @description 회원가입 관련 type
 */

import { z } from 'zod';

// NOTE: 회원가입 form zod schema
export const signUpSchema = z
  .object({
    email: z.email('올바른 이메일 형식을 입력해주세요'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
      .max(15, '비밀번호는 최대 15자까지 가능합니다')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        '영문, 숫자, 특수문자를 포함해야 합니다',
      ),
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요'),
    name: z
      .string()
      .min(1, '이름을 입력해주세요')
      .min(2, '이름은 최소 2자 이상이어야 합니다')
      .max(20, '이름은 최대 20자까지 가능합니다'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

// NOTE: 회원가입 form type
export type SignUpFormData = z.infer<typeof signUpSchema>;

// NOTE: API request type
export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}
// NOTE: API response type
export interface SignUpResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
