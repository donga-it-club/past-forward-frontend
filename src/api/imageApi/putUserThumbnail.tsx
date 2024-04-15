import axiosInstance from '../axiosConfig';
import { PutThumbnailRequest, PutThumbnailResponse } from '@/api/@types/Thumbnail';

// put 요청
const putUserThumbnail = async (requestData: PutThumbnailRequest): Promise<PutThumbnailResponse> => {
  try {
    const response = await axiosInstance.put<PutThumbnailResponse>('/users/{userId}/thumbnail', requestData);
    console.log('프로필 사진 등록 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('실패');
  }
};

export default putUserThumbnail;
