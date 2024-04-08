import { InternalAxiosRequestConfig } from 'axios';
import { number, string } from 'yup';
import { printRequestLog } from '@/utils/log';

export function logRequest(config: InternalAxiosRequestConfig) {
  printRequestLog({
    method: config.method,
    endPoint: config.url,
    requestParams: config.params,
    requestData: { code: number, message: string, data: config.data },
    config,
  });

  return config;
}
