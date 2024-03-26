import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { mockRetrospectiveTemplate } from '@/api/__mock__/retrospectiveTemplate';
import { mockSection } from '@/api/__mock__/section';

export const RetrospectiveHandlers: RequestHandler[] = [
  http.post('/retrospectives', () => {
    const mock = {
      id: 'acb4287',
      name: 'string',
    };
    return HttpResponse.json(mock);
  }),

  http.get('/retrospectivesTemplate', () => {
    return HttpResponse.json(mockRetrospectiveTemplate);
  }),
];

export const SectionHandlers: RequestHandler[] = [
  http.get(`sections/`, () => {
    return HttpResponse.json(mockSection);
  }),
];
export const mswWorker = setupWorker(...RetrospectiveHandlers, ...SectionHandlers);
