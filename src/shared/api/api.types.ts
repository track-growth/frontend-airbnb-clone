/**
 * @description API 오류 관련 타입 정의
 */

// NOTE: API 호출 후 response 오류 타입
export interface ApiError {
  // NOTE: 오류 메시지
  message: string
  // NOTE: 오류 상태 코드
  status: number
}
