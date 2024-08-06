import { PatchRetrospectiveRequest, PatchRetrospectiveResponse } from '../@types/Retrospectives';
import axiosInstance from '@/api/axiosConfig';

export const patchRetrospective = async (
  requestData: PatchRetrospectiveRequest,
): Promise<PatchRetrospectiveResponse> => {
  try {
    const response = await axiosInstance.patch<PatchRetrospectiveResponse>(
      `/retrospectives/${requestData.retrospectiveId}/bookmark`,
    );
    return response.data;
  } catch (error) {
    throw new Error('북마크 patch 실패');
  }
};
