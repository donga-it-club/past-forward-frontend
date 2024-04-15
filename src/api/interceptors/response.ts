import { AxiosError, AxiosResponse } from 'axios';
import { getErrorMessage } from '../helper';
import { printErrorLog, printResponseLog } from '@/utils/log';

//unwrapResponse
export function unwrapResponse(response: AxiosResponse) {
  return response.data?.data ?? response.data;
}

//logResponse
export function logResponse(response: AxiosResponse) {
  const { config, data } = response;

  printResponseLog({
    method: config?.method,
    endPoint: config?.url,
    responseObj: data?.data ?? data,
  });

  return response;
}

//logAndProcessError
export function logAndProcessError(e: AxiosError) {
  const url = e.config?.url;
  const method = e.config?.method;

  const errorMessage = getErrorMessage(e);

  printErrorLog({
    method,
    endPoint: url,
    errorMessage,
    errorObj: e,
  });
  //e 이유로 거부된 promise 객체를 반환
  return Promise.reject(e);
}
