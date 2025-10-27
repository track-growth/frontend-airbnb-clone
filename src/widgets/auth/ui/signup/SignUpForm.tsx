/**
 * @file SignUpForm.tsx
 * @description 회원가입 form UI component
 * - react-hook-form을 사용하여 form 상태를 관리합니다.
 * - zodResolver를 사용하여 form 유효성 검사를 수행합니다.
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// widgets layers
import { AuthInput } from '../common';
// entities layers
import { signUpSchema, type SignUpFormData, useSignUp } from '@/entities/user';

export const SignUpForm = ({ closeModalFn }: { closeModalFn: () => void }) => {
  // NOTE: react-hook-form 사용해서 form 상태 관리
  const {
    // NOTE: form 상태 관리 함수
    register,
    // NOTE: form 제출 함수
    handleSubmit,
    // NOTE: form 상태 관리 함수
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  });

  const { signUpMutation, onSubmitSignUpForm } = useSignUp();

  return (
    // NOTE: form 제출 시 onSubmitSignUpForm 함수 호출 (useForm의 handleSubmit 함수 props로 받은 data를 전달)
    // - data: form 제출 시 입력된 데이터
    <form
      onSubmit={handleSubmit(data => onSubmitSignUpForm(data, closeModalFn))}
      className="flex flex-col gap-4 mt-6"
    >
      <AuthInput
        label="이름"
        type="text"
        placeholder="이름을 입력해주세요"
        error={errors.name?.message}
        {...register('name')}
      />

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
        placeholder="영문, 숫자, 특수문자 조합 8~15자리"
        error={errors.password?.message}
        {...register('password')}
      />

      <AuthInput
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      {/* NOTE: 회원가입 버튼 */}
      <button
        type="submit"
        disabled={isSubmitting || signUpMutation.isPending}
        className="w-full py-3 px-4 bg-[#DF2058] text-white rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-bold"
      >
        {isSubmitting || signUpMutation.isPending ? '처리 중...' : '회원가입'}
      </button>

      {/* NOTE: 회원가입 실패 시 하단에 에러 메시지 출력 */}
      {signUpMutation.isError && (
        <div className="text-sm text-red-500 text-center">
          {signUpMutation.error?.message || '회원가입에 실패했습니다.'}
        </div>
      )}
    </form>
  );
};
