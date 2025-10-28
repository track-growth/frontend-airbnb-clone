/**
 * @description useLogin는 로그인 관련 hook입니다.
 * - React Query의 useMutation hook을 사용하여 로그인 API를 호출합니다.
 * - onSubmitLoginForm은 로그인 form을 제출할 때 호출되는 함수입니다.
 */

import { useMutation } from '@tanstack/react-query'
// entities layers
import { authApi } from './authApi'
import type { LoginRequest, LoginResponse, LoginFormData } from '../model'
// shared layers
import type { ApiError } from '@/shared'

export const useLogin = () => {
  const loginMutation = useMutation<LoginResponse, ApiError, LoginRequest>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      console.log('로그인 성공:', data)
    },
    onError: (error) => {
      console.error('로그인 실패:', error.message)
    },
  })

  const onSubmitLoginForm = async (
    data: LoginFormData,
    closeModalFn: () => void,
  ) => {
    try {
      await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      })
      // 로그인 성공시 모달을 닫으 airbnb에서 하길래...
      closeModalFn()
    } catch (error) {
      console.error('로그인 실패:', error)
    }
  }

  return { loginMutation, onSubmitLoginForm }
}


