import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import { Button, Text } from '@chakra-ui/react';
import postInviteTeam from '@/api/inviteTeamApi/postInviteTeam';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/inviteTeam/AcceptInvite.style';

const AcceptInvite: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useCustomToast();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // 로그인된 상태인지 확인
  const checkLoginStatus = async () => {
    try {
      await getCurrentUser();
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const searchParams = new URLSearchParams(location.search);
  const invitationCode = searchParams.get('invitationId');

  const acceptInvitation = async () => {
    try {
      if (invitationCode) {
        if (inviteSuccess) {
          navigate('/retrolist');
          return;
        }

        if (isLoggedIn) {
          // 로그인된 사용자인 경우에만 초대 수락 요청 보냄
          const response = await postInviteTeam(invitationCode);
          if (response.data.role === 'LEADER') {
            toast.error('리더는 초대 수락을 할 수 없습니다.');
          }

          if (response.code == 400) {
            toast.error('유효하지 않은 초대 메세지입니다.');
            navigate('/');
          }

          if (response.data.role === 'MEMBER') {
            setInviteSuccess(true); // 초대 요청이 성공했을 때 상태를 true로 변경
          } else {
            console.error('초대 수락 실패');
          }
        } else {
          navigate('/login'); // 로그인되지 않은 사용자는 로그인 페이지로 리다이렉트
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
      toast.info('초대를 성공적으로 수락했습니다!');
      navigate('/retrolist');
    }
  }, [inviteSuccess]);

  return (
    <>
      <S.Container>
        <S.TextContainer>
          <Text fontSize="2xl">초대를 수락하시겠습니까?</Text>
        </S.TextContainer>
        <Button colorScheme="brand" size="lg" onClick={acceptInvitation}>
          초대 수락하기
        </Button>
        <S.TextBox>
          <Text fontSize="sm">로그인 된 유저가 아닐 시 버튼 클릭시 로그인 화면으로 이동합니다.</Text>
          <Text fontSize="sm">로그인 후 다시 초대 링크에 접속해주세요!</Text>
        </S.TextBox>
      </S.Container>
    </>
  );
};

export default AcceptInvite;
