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
};
