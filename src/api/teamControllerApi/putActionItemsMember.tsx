import { PutActionItemsRequest, PutActionItemsResponse } from '@/api/@types/TeamController';
import axiosInstance from '@/api/axiosConfig';

export const putActionItemsMember = async (requestData: PutActionItemsRequest): Promise<PutActionItemsResponse> => {
  try {
    // console.log(requestData);
    const response = await axiosInstance.put<PutActionItemsResponse>('/sections/action-items', requestData);
    // console.log('action item 멤버 저장 성공', response);
    return response.data;
  } catch (error) {
    throw new Error('action item 멤버 저장 실패');
  }
};
