import axiosInstance from '../axiosConfig';
import { RetrospectivesTemplateResponse } from '@/api/@types/RetrospectiveTemplates';

const getTemplate = async () => {
  try {
    const response = await axiosInstance.get<RetrospectivesTemplateResponse>('/retrospective-templates');
    return response.data.data;
  } catch (error) {
    throw new Error('템플릿 조회 실패');
  }
};

export default getTemplate;
