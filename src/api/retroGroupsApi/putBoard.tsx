import { PutRetrospectiveGroupBoardRequest, PutRetrospectiveGroupBoardResponse } from '../@types/Groups';
import axiosInstance from '@/api/axiosConfig';

export const putBoard = async ({
  retrospectiveGroupId,
  ...request
}: PutRetrospectiveGroupBoardRequest): Promise<PutRetrospectiveGroupBoardResponse> => {
  try {
    const response = await axiosInstance.put(`/retrospectiveGroups/${retrospectiveGroupId}/boards`, request);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
