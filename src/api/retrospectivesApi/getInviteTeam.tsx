import { GetInviteTeamRequest, GetInviteTeamResponse } from '../@types/InviteTeam';
import axiosInstance from '../axiosConfig';

const getInviteTeam = async (teamId: GetInviteTeamRequest): Promise<GetInviteTeamResponse> => {
  try {
    const response = await axiosInstance.get<GetInviteTeamResponse>(`/teams/${teamId}/invitation-url`);
    console.log('팀원 초대 호출 성공', response.data);
    return response.data;
  } catch (error) {
    throw new Error('팀원 초대 호출 실패');
  }
};

export default getInviteTeam;
