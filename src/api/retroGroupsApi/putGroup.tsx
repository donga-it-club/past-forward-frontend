import { PutRetrospectiveGroupRequest, PutRetrospectiveGroupResponse } from '@/api/@types/Groups';
import axiosInstance from '@/api/axiosConfig';

export const putGroup = async ({
  retrospectiveGroupId,
  ...request
}: PutRetrospectiveGroupRequest): Promise<PutRetrospectiveGroupResponse> => {
  try {
    const response = await axiosInstance.put(`/retrospectiveGroups/${retrospectiveGroupId}`, request);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
