import { PostRetrospectivesGroupRequest, PostRetrospectivesGroupResponse } from '@/api/@types/Groups';
import axiosInstance from '@/api/axiosConfig';

const postGroup = async (requestData: PostRetrospectivesGroupRequest): Promise<PostRetrospectivesGroupResponse> => {
  try {
    const response = await axiosInstance.post<PostRetrospectivesGroupResponse>('/retrospectiveGroups', requestData);
    return response.data;
  } catch (error) {
    throw new Error('그룹 생성 실패');
  }
};

export default postGroup;
