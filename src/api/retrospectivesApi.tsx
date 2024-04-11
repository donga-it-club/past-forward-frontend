import axiosInstance from './axiosConfig';
import { PostRetrospectivesRequest, PostRetrospectivesResponse } from '@/api/@types/Retrospectives';

// post 요청
const createRetrospective = async (requestData: PostRetrospectivesRequest): Promise<PostRetrospectivesResponse> => {
  try {
    const response = await axiosInstance.post<PostRetrospectivesResponse>('/api/retrospectives', requestData);
    console.log('회고 생성 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('회고 생성 실패');
  }
};

export default createRetrospective;
