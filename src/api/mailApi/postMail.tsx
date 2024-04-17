import { PostMailRequest, PostMailResponse } from '../@types/Mail';
import axiosInstance from '../axiosConfig';

// post 요청
export const PostMail = async (requestData: PostMailRequest): Promise<PostMailResponse> => {
  try {
    const response = await axiosInstance.post<PostMailResponse>('/mails', requestData);
    console.log('메일 전송 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('실패');
  }
};
