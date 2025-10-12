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
      sessionStorage.setItem('token', data.token);
      console.log('회원가입 성공:', data.message);
    },
    onError: error => {
      console.error('회원가입 실패:', error.message);
    },
  });

  const onSubmitSignUpForm = async (data: SignUpFormData, closeModalFn: () => void) => {
    try {
      await signUpMutation.mutateAsync({
        email: data.email,
        password: data.password,
        name: data.name,
      });
      closeModalFn();
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return { signUpMutation, onSubmitSignUpForm };
};
