/**
 * @description queryClientConfig는 Tanstack Query(React Query)의 기본 설정입니다.
 * - retry: 1은 요청이 실패할 경우 1번 재시도합니다.
 * - retryDelay: 0은 재시도 전에 0ms 대기합니다.
 * - staleTime: 1분(60000ms) 동안 데이터가 최신이 아닌 경우 재요청하지 않습니다. (기본값: 0)
 */

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 0,
      staleTime: 1 * 60 * 1000,
    },
    mutations: {
      retry: 1,
      retryDelay: 0,
    },
  },
}
