// import { PostInviteTeamRequest } from '../@types/InviteTeam';
import axiosInstance from '../axiosConfig';

const postInviteTeam = async (invitationId: string) => {
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
