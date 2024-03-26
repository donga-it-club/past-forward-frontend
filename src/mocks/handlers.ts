import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { mockRetrospectiveTemplate } from '@/api/__mock__/retrospectiveTemplate';

export const CommentHandlers: RequestHandler[] = [
  http.get('/comments/get', () => {
    const mock = {
      id: 'acb4287',
      name: 'string',
    };
    return HttpResponse.json(mock);
  }),
];

export const RetrospectiveHandlers: RequestHandler[] = [
  http.post('/retrospectives', () => {
    const mock = {
      id: 'acb4287',
      name: 'string',
    };
    return HttpResponse.json(mock);
  }),

  http.get('/retrospectivesTemplate', () => {
    mockRetrospectiveTemplate;

    return HttpResponse.json(mockRetrospectiveTemplate);
  }),
];
export const mswWorker = setupWorker(...CommentHandlers, ...RetrospectiveHandlers);
