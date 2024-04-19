import {
  DeleteRetrospectiveRequest,
  GetRetrospectiveData,
  GetRetrospectiveRequest,
  onlyGetRetrospectiveRequest,
  onlyGetRetrospectiveResponse,
  PostRetrospectivesRequest,
  PostRetrospectivesResponse,
  RetrospectivesClient,
} from '../@types/Retrospectives';
import axiosInstance from '../axiosConfig';
import { mswInstance } from '../client';

const ROUTE = 'retrospectives';

export const RetrospectiveService: RetrospectivesClient = {
  onlyGet: async ({ retrospectiveId }: onlyGetRetrospectiveRequest): Promise<onlyGetRetrospectiveResponse> => {
    try {
      const response = await axiosInstance.get<onlyGetRetrospectiveResponse>(`${ROUTE}/${retrospectiveId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  create: async (request: PostRetrospectivesRequest): Promise<PostRetrospectivesResponse> => {
    try {
      const response = await axiosInstance.post<PostRetrospectivesResponse>(`${ROUTE}/`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  get: async (request: GetRetrospectiveRequest): Promise<GetRetrospectiveData> => {
    try {
      const response = await mswInstance.get(`${ROUTE}/`, {
        params: request,
      });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },

  delete: async ({ retrospectiveId }: DeleteRetrospectiveRequest): Promise<void> => {
    try {
      const response = await mswInstance.delete(`${ROUTE}/${retrospectiveId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  put: async ({ retrospectiveId }, ...request) => {
    try {
      const response = await axiosInstance.put(`${ROUTE}/${retrospectiveId}`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  patch: async (retrospectiveId, ...request) => {
    return await mswInstance.patch(`${ROUTE}/${retrospectiveId}/bookmark`, request);
  },
};
