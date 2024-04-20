import { GetRetrospectiveData, GetRetrospectiveRequest } from '@/api/@types/Retrospectives';
import axiosInstance from '@/api/axiosConfig';

export const queryGetRetrospective = async (requestData: GetRetrospectiveRequest): Promise<GetRetrospectiveData> => {
  try {
    const { page, size, order, status, keyword, isBookmarked } = requestData;
    const params: { [key: string]: any } = {
      page,
      size,
      order,
      isBookmarked,
    };
    if (status !== 'ALL') {
      params.status = status;
    }
    if (keyword !== '') {
      params.keyword = keyword;
    }

    console.log(params);
    const response = await axiosInstance.get<GetRetrospectiveData>('/retrospectives', {
      params,
    });
    // console.log('회고 get 성공', response.data);
    return response.data;
  } catch (error) {
    // console.log('회고 get 실패', error);
    throw new Error('회고 get 실패');
  }
};
