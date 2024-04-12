import { AxiosResponse } from 'axios';

export function unwrapResponse(response: AxiosResponse) {
  return response.data?.data ?? response.data;
}
