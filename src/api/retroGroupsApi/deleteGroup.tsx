import { DeleteRetrospectiveRequest } from '@/api/@types/Groups';
import axiosInstance from '@/api/axiosConfig';

export const DeleteGroup = async ({ retrospectiveGroupId }: DeleteRetrospectiveRequest): Promise<void> => {
  try {
    const response = await axiosInstance.delete(`/retrospectiveGroups/${retrospectiveGroupId}`);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
