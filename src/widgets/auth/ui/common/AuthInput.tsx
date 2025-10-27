/**
 * @file AuthInput.tsx
 * @description 회원가입/로그인 form 내 email, password, confirmPassword 공통 input 컴포넌트
 * @props
 * - label: input 상단 라벨 (이름, 이메일, 비밀번호 등)
 * - type: input 타입
 * - placeholder: input placeholder
 * - error: form 유효성 검사 오류 메시지
 * - ...props: input 추가 속성 (name, value, onChange, onBlur 등)
 */

import { forwardRef } from 'react'

interface AuthInputProps {
  label: string
  type: string
  placeholder: string
  error?: string
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, type, placeholder, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    )
  },
)

AuthInput.displayName = 'AuthInput'
