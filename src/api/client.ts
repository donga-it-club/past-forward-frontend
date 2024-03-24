import axios from 'axios';
import { unwrapResponse } from './interceptors/response';

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000/api',
  timeout: 4000,
  validateStatus: status => status >= 200 && status < 400,
  withCredentials: true,
});

export const mswInstance = axios.create({
  baseURL: '/',
  timeout: 4000,
  validateStatus: status => status >= 200 && status < 400,
  withCredentials: true,
});

mswInstance.interceptors.response.use(unwrapResponse);
