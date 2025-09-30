export interface SignUpRequest {
  email: string
  password: string
  name: string
}

export interface SignUpResponse {
  message: string
  token: string
}

export const useSignUp = () => {
  // TODO: 회원가입 기능 추가
}
