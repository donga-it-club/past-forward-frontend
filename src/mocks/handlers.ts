import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { MockRetrospective } from '@/api/__mock__/retrospective';
import { mockSection } from '@/api/__mock__/section';

//Retro
const RETRO_ROUTE = 'retrospectives';
export const RetrospectiveHandlers: RequestHandler[] = [
  http.post(`/${RETRO_ROUTE}`, () => {
    const mock = {
      code: 0,
      message: 'string',
      data: {
        id: 0,
        title: 'heejung',
        teamId: 0,
        userId: 0,
        templateId: 0,
        status: 'NOT_STARTED',
        thumbnail: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        startDate: '2024-04-11T16:28:15.042Z',
        description: 'heejung',
      },
    };
    return HttpResponse.json(mock);
  }),
  http.get(`${RETRO_ROUTE}?retrospectiveId=1&teamId=1`, () => {
    return HttpResponse.json(mockSection);
  }),
  http.delete(`${RETRO_ROUTE}/0`, () => {
    return;
  }),
  http.put(`${RETRO_ROUTE}/1`, () => {
    return HttpResponse.json(MockRetrospective);
  }),

  http.get('/retrospectivesTemplate', () => {
    return HttpResponse.json();
  }),
];

//section
const SECTION_ROUTE = 'sections';
export const SectionHandlers: RequestHandler[] = [
  http.get(`${SECTION_ROUTE}/`, () => {
    return HttpResponse.json(mockSection);
  }),
  http.post(`${SECTION_ROUTE}/`, () => {
    return HttpResponse.json(mockSection);
  }),
  http.patch(`${SECTION_ROUTE}/1`, () => {
    return HttpResponse.json(mockSection);
  }),
  http.delete(`${SECTION_ROUTE}/1`, () => {
    return HttpResponse.json(mockSection);
  }),
  http.post(`${SECTION_ROUTE}/0/likes`, () => {
    const mockLikes = {
      sectionId: 0,
      likeCnt: 2,
    };
    return HttpResponse.json(mockLikes);
  }),
];
export const mswWorker = setupWorker(...RetrospectiveHandlers);
