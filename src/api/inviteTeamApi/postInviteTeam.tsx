// import { PostInviteTeamRequest } from '../@types/InviteTeam';
import axiosInstance from '../axiosConfig';

export interface InviteTeamData {
  teamId: number;
  userId: number;
  role: string;
}

export interface InviteTeamResponse {
  code: number;
  message: string;
  data: InviteTeamData;
}

const postInviteTeam = async (invitationId: string): Promise<InviteTeamResponse> => {
  try {
    const response = await axiosInstance.post('/teams/accept-invitation', {
      invitationCode: invitationId, // useParams 로 받아온 코드
    });
    return response.data;
  } catch (error) {
    throw new Error('팀원 초대 실패');
  }
};

export default postInviteTeam;
