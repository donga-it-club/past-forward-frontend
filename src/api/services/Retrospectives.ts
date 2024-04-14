import { RetrospectivesClient } from '../@types/Retrospectives';
import { mswInstance } from '../client';

const ROUTE = 'retrospectives';

export const RetrospectiveService: RetrospectivesClient = {
  create: async request => {
    return await mswInstance.post(`${ROUTE}/`, request);
  },
  get: async request => {
    return await mswInstance.get(`${ROUTE}/`, {
      params: request,
    });
  },
  delete: async ({ retrospectiveId }) => {
    return await mswInstance.delete(`${ROUTE}/${retrospectiveId}`);
  },
  put: async ({ retrospectiveId }, ...request) => {
    return await mswInstance.put(`${ROUTE}/${retrospectiveId}`, request);
  },
};
