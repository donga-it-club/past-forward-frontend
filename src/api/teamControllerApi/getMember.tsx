import { GetTeamMembersRequest, GetTeamMembersResponse } from '@/api/@types/TeamController';
import axiosInstance from '@/api/axiosConfig';

export const getMember = async ({
  teamId,
  retrospectiveId,
}: GetTeamMembersRequest): Promise<GetTeamMembersResponse> => {
  try {
    const response = await axiosInstance.get<GetTeamMembersResponse>(`/teams/${teamId}/users?${retrospectiveId}=`);
    console.log('팀 멤버 조회 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('팀 멤버 조회 실패');
  }
};
