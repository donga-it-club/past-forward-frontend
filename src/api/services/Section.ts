import { SectionClient } from '../@types/Section';
import { mswInstance } from '../client';

const ROUTE = 'sections';

export const SectionServices: SectionClient = {
  get: async () => {
    return await mswInstance.get(`${ROUTE}/`);
  },
  create: async request => {
    return await mswInstance.post(`${ROUTE}/`, request);
  },
  patch: async ({ sectionId, ...request }) => {
    return await mswInstance.patch(`${ROUTE}/${sectionId}`, { params: request });
  },
  delete: async sectionId => {
    return await mswInstance.delete(`${ROUTE}/${sectionId}`);
  },
  likePost: async id => {
    return await mswInstance.post(`${ROUTE}/${id}/likes`);
  },
};
