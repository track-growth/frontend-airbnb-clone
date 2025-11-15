/**
 * @file LoginForm.tsx
 * @description 로그인 form UI component
 * - react-hook-form을 사용하여 form 상태를 관리합니다.
 * - zodResolver를 사용하여 form 유효성 검사를 수행합니다.
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// widgets layers
import { AuthInput } from '../common';
// entities layers
import { loginSchema, type LoginFormData, useLogin } from '@/entities/user';

export const LoginForm = ({ closeModalFn }: { closeModalFn: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const { loginMutation, onSubmitLoginForm } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(data => onSubmitLoginForm(data, closeModalFn))}
      className="flex flex-col gap-4 mt-6"
    >
      <AuthInput
        label="이메일"
        type="email"
        placeholder="user@gmail.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <AuthInput
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        error={errors.password?.message}
        {...register('password')}
      />

      <button
        type="submit"
        disabled={isSubmitting || loginMutation.isPending}
        className="w-full py-3 px-4 bg-[#DF2058] text-white rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-bold"
      >
        {isSubmitting || loginMutation.isPending ? '처리 중...' : '로그인'}
      </button>

      {loginMutation.isError && (
        <div className="text-sm text-red-500 text-center">
          {loginMutation.error?.message || '로그인에 실패했습니다.'}
        </div>
      )}
    </form>
  );
};


