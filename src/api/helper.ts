const isDev = process.env.NODE_ENV === 'development';

export function getErrorMessage(err: unknown): string {
  if (typeof err === 'string') {
    return err;
  }
  if (typeof err === 'object' && !!err && !Array.isArray(err)) {
    const error: Record<string, any> = err;
    const errorData = error.response?.data?.data ?? error.response?.data ?? error.data ?? error;
    const traceId = error.response?.headers?.['x-trace-id'];

    const message: string | undefined = (() => {
      if (typeof errorData === 'object') return errorData?.message;

      if (typeof errorData === 'string') return errorData;

      return;
    })();

    const withTraceId = (message: string) => (isDev ? `${message} (Trace ID: ${traceId}) ` : message);

    if (message) {
      if (error.status === 500) {
        return `[SERVER ERROR] ${withTraceId(message)}`;
      }
      return message;
    }
    return withTraceId('알 수 없는 에러 발생');
  }
  return '알 수 없는 에러 발생';
}
