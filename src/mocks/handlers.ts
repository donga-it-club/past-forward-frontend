import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

/* 임시 api */
export const handlers: RequestHandler[] = [
  http.get('/comments/get', () => {
    const mock = {
      id: 'acb4287',
      name: 'string',
      text: 'string',
    };
    return HttpResponse.json(mock);
  }),
];
export const mswWorker = setupWorker(...handlers);
