import { PutKudosTargetRequest, PutKudosTargetResponse } from '@/api/@types/TeamController';
import axiosInstance from '@/api/axiosConfig';

export const putKudosTarget = async ({
  sectionId,
  ...request
}: PutKudosTargetRequest): Promise<PutKudosTargetResponse> => {
  try {
    const response = await axiosInstance.put<PutKudosTargetResponse>(`sections/${sectionId}/kudos-target`, request);
    return response.data;
  } catch (error) {
    throw new Error('kudos 칭찬 지정 실패');
  }
};
