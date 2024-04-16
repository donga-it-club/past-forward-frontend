import { RetrospectivesClient } from '../@types/Retrospectives';
import axiosInstance from '../axiosConfig';
import { mswInstance } from '../client';

const ROUTE = 'retrospectives';

export const RetrospectiveService: RetrospectivesClient = {
  onlyGet: async ({ retrospectiveId }) => {
    return await axiosInstance.get(`${ROUTE}/${retrospectiveId}`);
  },
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
    return await axiosInstance.put(`${ROUTE}/${retrospectiveId}`, request);
  },
};
