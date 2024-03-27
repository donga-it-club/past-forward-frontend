import { RetrospectivesClient } from '../@types/Retrospectives';
import { mswInstance } from '../client';

const ROUTE = 'retrospectives';

export const Retrospective: RetrospectivesClient = {
  post: async request => {
    return await mswInstance.post(`${ROUTE}/`, {
      params: request,
    });
  },
  get: async request => {
    return await mswInstance.get(`${ROUTE}/`, {
      params: request,
    });
  },
  delete: async id => {
    return await mswInstance.delete(`${ROUTE}/${id}`);
  },
  put: async (id, ...request) => {
    return await mswInstance.put(`${ROUTE}/${id}`, request);
  },
};
