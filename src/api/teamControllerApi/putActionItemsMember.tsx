import { PutActionItemsRequest, PutActionItemsResponse } from '../@types/TeamController';
import axiosInstance from '@/api/axiosConfig';

export const patchActionItemsMember = async (requestData: PutActionItemsRequest): Promise<PutActionItemsResponse> => {
  try {
    console.log(requestData);
    const response = await axiosInstance.put<PutActionItemsResponse>(`/sections/action-items`);
    console.log('action item 멤버 저장 성공', response);
    return response.data;
  } catch (error) {
    throw new Error('action item 멤버 저장 실패');
  }
};
