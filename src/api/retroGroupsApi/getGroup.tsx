import { GetRetrospectiveGroupRequest, GetRetrospectiveGroupResponse } from '@/api/@types/Groups';
import axiosInstance from '@/api/axiosConfig';

export const GetRetrospectiveGroup = async ({
  retrospectiveGroupId,
  ...request
}: GetRetrospectiveGroupRequest): Promise<GetRetrospectiveGroupResponse> => {
  try {
    const response = await axiosInstance.get<GetRetrospectiveGroupResponse>(
      `/retrospectiveGroups/${retrospectiveGroupId}`,
      request,
    );
    return response.data;
  } catch (error) {
    throw new Error('단일 그룹 조회 실패');
  }
};

export default GetRetrospectiveGroup;
