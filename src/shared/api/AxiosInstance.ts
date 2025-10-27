/**
 * @description axios instance를 생성하는 함수입니다.
 * - 모든 API 요청에 공통적으로 적용되는 interceptor를 설정합니다. (토큰 추가, 오류 처리)
 */

import axios from 'axios'

// NOTE: .env 파일 생성 & 서버 url 설정 필요 (.env.example 참고)
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// NOTE: 요청을 보내기 전에 토큰 추가
axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// NOTE: 응답을 받은 후 오류 처리
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // NOTE: 401 오류 시 토큰 삭제 & 로그인 페이지로 이동
    // if (error.response.status === 401) {
    //   sessionStorage.removeItem('token');
    //   window.location.href = '/';
    // }
    return Promise.reject(error)
  },
)

export { axiosInstance }
