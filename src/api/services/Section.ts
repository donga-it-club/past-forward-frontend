import { SectionClient } from '../@types/Section';
import { axiosInstance } from '../client';

const ROUTE = 'sections';

export const SectionServices: SectionClient = {
  get: async request => {
    return await axiosInstance.get(`${ROUTE}/`, { params: request });
  },
  create: async request => {
    return await axiosInstance.post(`${ROUTE}/`, request);
  },
  patch: async ({ sectionId, ...request }) => {
    return await axiosInstance.patch(`${ROUTE}/${sectionId}`, request);
  },
  delete: async ({ sectionId }) => {
    return await axiosInstance.delete(`${ROUTE}/${sectionId}`);
  },
  likePost: async ({ sectionId }) => {
    return await axiosInstance.post(`${ROUTE}/${sectionId}/likes`);
  },
};
