import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { MockRetrospective } from '@/api/__mock__/retrospective';
import { mockRetrospectiveTemplate } from '@/api/__mock__/retrospectiveTemplate';
import { mockSection } from '@/api/__mock__/section';

//Retro
const RETRO_ROUTE = 'retrospectives';
export const RetrospectiveHandlers: RequestHandler[] = [
  http.post(`/${RETRO_ROUTE}`, () => {
    const mock = {
      id: 'acb4287',
      name: 'string',
    };
    return HttpResponse.json(mock);
  }),
  http.get(`${RETRO_ROUTE}`, () => {
    return HttpResponse.json(MockRetrospective);
  }),
  http.delete(`${RETRO_ROUTE}/0`, () => {
    return;
  }),
  http.put(`${RETRO_ROUTE}/0`, () => {
    return HttpResponse.json(MockRetrospective);
  }),

  http.get('/retrospectivesTemplate', () => {
    return HttpResponse.json(mockRetrospectiveTemplate);
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
  http.patch(`${SECTION_ROUTE}/0`, () => {
    return HttpResponse.json(mockSection);
  }),
  http.delete(`${SECTION_ROUTE}/0`, () => {
    return;
  }),
  http.post(`${SECTION_ROUTE}/0/likes`, () => {
    const mockLikes = {
      sectionId: 0,
      likeCnt: 2,
    };
    return HttpResponse.json(mockLikes);
  }),
];
export const mswWorker = setupWorker(...RetrospectiveHandlers, ...SectionHandlers);
