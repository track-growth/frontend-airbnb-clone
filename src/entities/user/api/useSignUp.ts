/**
 * @description useSignUp는 회원가입 관련 hook입니다.
 * - React Query의 useMutation hook을 사용하여 회원가입 API를 호출합니다.
 * - onSubmitSignUpForm은 회원가입 form을 제출할 때 호출되는 함수입니다.
 */

import { useMutation } from '@tanstack/react-query';
// entities layers
import { authApi } from './authApi';
import type { SignUpRequest, SignUpResponse, SignUpFormData } from '../model';
// shared layers
import type { ApiError } from '@/shared';

export const useSignUp = () => {
  const signUpMutation = useMutation<SignUpResponse, ApiError, SignUpRequest>({
    mutationFn: authApi.signUp,
    onSuccess: data => {
      console.log('회원가입 성공:', data.message);
    },
    onError: error => {
      console.error('회원가입 실패:', error.message);
    },
  });

  const onSubmitSignUpForm = async (data: SignUpFormData, closeModalFn: () => void) => {
    try {
      // NOTE: 회원가입 API 호출
      await signUpMutation.mutateAsync({
        email: data.email,
        password: data.password,
        nickname: data.name,
      });
      // NOTE: 회원가입 성공 시 (props로 받은) 모달 닫는 함수 호출
      closeModalFn();
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return { signUpMutation, onSubmitSignUpForm };
};
