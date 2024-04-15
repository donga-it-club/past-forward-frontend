import { AxiosError, AxiosRequestConfig } from 'axios';

const enum Colors {
  Info = '#0490C8',
  Success = '#22bb33',
  Warn = '#DE793B',
  Error = '#C73333',
}

const isDev = process.env.NODE_ENV === 'development';

type PrintRequestLogParams = {
  method?: string;
  endPoint?: string;
  requestData?: Record<string, unknown>; // 동적 속성을 가진 데이터를 처리
  requestParams?: Record<string, unknown>;
  config: AxiosRequestConfig;
};

//printRequestLog
export function printRequestLog({ method, endPoint, requestData, requestParams, config }: PrintRequestLogParams) {
  if (!isDev) return;

  if (Object.keys(requestParams ?? {}).length) {
    console.log(
      `%c${method?.toUpperCase()} ${endPoint} [REQ PARAMS]`,
      `color: ${Colors.Info};font-weight: bold;`,
      requestParams,
    );
  }
  console.log(
    `%c${method?.toUpperCase()} ${endPoint} [REQ BODY]`,
    `color: ${Colors.Info};font-weight: bold;`,
    requestData,
  );
  console.log(
    `%c${method?.toUpperCase()} ${endPoint} [REQ HEADERS]`,
    `color: ${Colors.Info};font-weight: bold;`,
    config.headers,
  );
  console.log(
    `%c${method?.toUpperCase()} ${endPoint} [REQ CONFIG]`,
    `color: ${Colors.Info};font-weight: bold;`,
    config,
  );
}

type PrintResponseLogParams = {
  method?: string;
  endPoint?: string;
  responseObj?: Record<string, unknown>;
};

//printResponseLog
export function printResponseLog({ method, endPoint, responseObj }: PrintResponseLogParams) {
  if (!isDev) return;
  console.log(
    `%c${method?.toUpperCase()} ${endPoint} [RES BODY]`,
    `color: ${Colors.Success};font-weight: bold`,
    responseObj,
  );
}

type PrintErrorLogParams = {
  method?: string;
  endPoint?: string;
  errorMessage?: string;
  errorObj?: AxiosError;
};

//printErrorLog
export function printErrorLog({ method, endPoint, errorMessage, errorObj }: PrintErrorLogParams) {
  if (!isDev) return;

  console.log(
    `%c${method?.toUpperCase()} ${endPoint} [ERR]`,
    `color: ${Colors.Error};font-weight: bold`,
    errorMessage,
    errorObj,
  );
}
