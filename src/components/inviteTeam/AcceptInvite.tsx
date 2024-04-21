import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import postInviteTeam from '@/api/inviteTeamApi/postInviteTeam';
import * as S from '@/styles/inviteTeam/AcceptInvite';

const AcceptInvite: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inviteSuccess, setInviteSuccess] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const invitationCode = searchParams.get('invitationId');

  const acceptInvitation = async () => {
    try {
      if (invitationCode) {
        const response = await postInviteTeam(invitationCode);
        // 백엔드에서 204 반환해줌
        if (response.status === 204) {
          setInviteSuccess(true); // 초대 요청이 성공했을 때 상태를 true로 변경
        } else {
          console.error('초대 수락 실패');
        }
      } else {
        console.error('invitationCode 추출 실패');
      }
    } catch (error) {
      console.error('에러', error);
    }
  };

  useEffect(() => {
    if (inviteSuccess) {
      // 초대 성공 시 알림을 띄우고 retrolist 페이지로 navigate
      alert('초대를 성공적으로 수락했습니다!');
      navigate('/retrolist');
    }
  }, [inviteSuccess, navigate]);

  return (
    <>
      <S.Container>
        <S.TextContainer>
          <Text fontSize="2xl">초대를 수락하시겠습니까?</Text>
        </S.TextContainer>
        <Button colorScheme="brand" size="lg" onClick={acceptInvitation}>
          초대 수락하기
        </Button>
      </S.Container>
    </>
  );
};

export default AcceptInvite;
