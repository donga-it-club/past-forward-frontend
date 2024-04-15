import axiosInstance from '../axiosConfig';
import { PostImageToS3Request, PostImageToS3Response } from '@/api/@types/Thumbnail';

// post 요청
const postImageToS3 = async (requestData: PostImageToS3Request): Promise<PostImageToS3Response> => {
  try {
    const response = await axiosInstance.post<PostImageToS3Response>('/s3/pre-signed-url', requestData);
    console.log('사진 s3 업로드 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('실패');
  }
};

export default postImageToS3;
