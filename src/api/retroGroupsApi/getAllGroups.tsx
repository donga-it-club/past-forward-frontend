import { GetRetrospectiveGroups, GetRetrospectiveGroupsRequest } from '@/api/@types/Groups';
import axiosInstance from '@/api/axiosConfig';

export const queryGetRetrospectiveAllGroups = async (
  requestData: GetRetrospectiveGroupsRequest,
): Promise<GetRetrospectiveGroups> => {
  try {
    const { page, size, status, keyword, isBookmarked } = requestData;
    const params: Partial<GetRetrospectiveGroupsRequest> = {
      page,
      size,
      isBookmarked,
    };
    if (status !== 'ALL') {
      params.status = status;
    }
    if (keyword !== '') {
      params.keyword = keyword;
    }
    const response = await axiosInstance.get<GetRetrospectiveGroups>('/retrospectiveGroups', { params });
    return response.data;
  } catch (error) {
    throw new Error('그룹 회고 get 실패');
  }
};
