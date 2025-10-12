import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // if (error.response.status === 401) {
    //   sessionStorage.removeItem('token');
    //   window.location.href = '/';
    // }
    return Promise.reject(error);
  },
);

export { axiosInstance };
