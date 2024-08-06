import { PostSurveyRequest, PostSurveyResponse } from '../@types/Survey';
import axiosInstance from '../axiosConfig';

// post 요청
export const PostSurvey = async (requestData: PostSurveyRequest): Promise<PostSurveyResponse> => {
  try {
    const response = await axiosInstance.post<PostSurveyResponse>('/surveys/responses', requestData);
    return response.data;
  } catch (error) {
    throw new Error('실패');
  }
};
