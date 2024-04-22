import axiosInstance from '../axiosConfig';
import { PutUsersRequest, PutUsersResponse } from '@/api/@types/User';

// put 요청
const putUser = async (requestData: PutUsersRequest): Promise<PutUsersResponse> => {
  try {
    const response = await axiosInstance.put<PutUsersResponse>('/users/me', requestData);
    console.log('유저 정보 수정 api 호출 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('유저 정보 수정 api 호출 실패');
  }
};

export default putUser;
