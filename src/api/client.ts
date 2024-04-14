import axios from 'axios';
import { logRequest } from './interceptors/request';
import { logAndProcessError, logResponse, unwrapResponse } from './interceptors/response';
import { flow } from '@/utils/flow';

export const mswInstance = axios.create({
  baseURL: '/',
  timeout: 4000,
  validateStatus: status => status >= 200 && status < 400,
  withCredentials: true,
});

export const axiosInstance = axios.create({
  // baseURL: 'http://-forward-load-balancer-1892345872.us-west-2.elb.amazonaws.com/',
  baseURL: 'https://localhost:3000/api',
  timeout: 4000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(logRequest);
axiosInstance.interceptors.response.use(flow([logResponse, unwrapResponse]), logAndProcessError);

mswInstance.interceptors.response.use(unwrapResponse);
