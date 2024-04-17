import { GetUsersResponse } from '../@types/User';
import axiosInstance from '../axiosConfig';

const getUser = async () => {
  try {
    const response = await axiosInstance.get<GetUsersResponse>(`/users/me`);
    console.log('유저 정보 조회 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('유저 정보 조회 실패');
  }
};

export default getUser;
