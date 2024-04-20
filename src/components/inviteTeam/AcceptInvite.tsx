import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import postInviteTeam from '@/api/inviteTeamApi/postInviteTeam';

const AcceptInvite: React.FC = () => {
  const { invitationId } = useParams<{ invitationId?: string }>();
  const navigate = useNavigate();
  const [inviteSuccess, setInviteSuccess] = useState(false);

  useEffect(() => {
    const acceptInvitation = async () => {
      try {
        if (invitationId) {
          const response = await postInviteTeam(invitationId);
          // 백엔드에서 204 반환해줌
          if (response.status === 204) {
            setInviteSuccess(true); // 초대 요청이 성공했을 때 상태를 true로 변경
          } else {
            console.error('초대 수락 실패');
          }
        } else {
          console.error('InvitationId 추출 실패');
        }
      } catch (error) {
        console.error('에러', error);
      }
    };

    acceptInvitation();
  }, [invitationId]);

  useEffect(() => {
    if (inviteSuccess) {
      // 초대 성공 시 알림을 띄우고 retrolist 페이지로 navigate
      alert('초대를 성공적으로 수락했습니다!');
      navigate('/retrolist');
    }
  }, [inviteSuccess, navigate]);

  return <div>초대를 수락하는 중...</div>;
};

export default AcceptInvite;
