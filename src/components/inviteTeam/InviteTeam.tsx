import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { GetInviteTeamResponse, InviteTeamData } from '@/api/@types/InviteTeam';
import getInviteTeam from '@/api/retrospectivesApi/getInviteTeam';

interface InviteTeamComponentProps {
  teamId: number;
}

const InviteTeamComponent: React.FC<InviteTeamComponentProps> = ({ teamId }) => {
  const [inviteData, setInviteData] = useState<InviteTeamData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchInviteData = async () => {
      try {
        const response: GetInviteTeamResponse = await getInviteTeam(teamId);
        setInviteData(response.data);
      } catch (error) {
        console.error(error);
        setError('팀원 초대 get 실패');
      }
    };

    fetchInviteData();
  }, [teamId]); // teamId가 변경될 때마다 호출

  if (error) {
    return <div>{error}</div>;
  }

  if (!inviteData) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <p>초대 코드: {inviteData.invitationCode}</p>
      <p>
        초대 URL:{' '}
        <a href={inviteData.invitationUrl} target="_blank" rel="noopener noreferrer">
          {inviteData.invitationUrl}
        </a>
      </p>
      <p>만료 시간: {inviteData.expirationTime}</p>
      <QRCode value={inviteData.qrCodeImage} />
      <p>{inviteData.qrCodeImage}</p>
    </div>
  );
};

export default InviteTeamComponent;
