import { PatchRetrospectiveRequest, PatchRetrospectiveResponse } from '../@types/Retrospectives';
import axiosInstance from '@/api/axiosConfig';

export const patchRetrospective = async (
  requestData: PatchRetrospectiveRequest,
): Promise<PatchRetrospectiveResponse> => {
  try {
    console.log(requestData.retrospectiveId, 'patch 요청');
    const response = await axiosInstance.patch<PatchRetrospectiveResponse>(
      `/retrospectives/${requestData.retrospectiveId}/bookmark`,
    );
    console.log('북마크 patch 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('북마크 patch 실패');
  }
};
