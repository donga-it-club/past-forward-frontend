import { useState, useEffect } from 'react';
import { Gear, PersonCircle } from 'react-bootstrap-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { getCurrentUser, signOut, fetchUserAttributes } from 'aws-amplify/auth';
import { useRecoilState } from 'recoil';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import PageSideBar from './PageSideBar';
import Alarm from '@/components/alarm/Alarm';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

const PageNavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userNickname, setUserNickname] = useState<string | null>(null);
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);

  const checkLoginStatus = async () => {
    try {
      await getCurrentUser();
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      handleSignOut(); // 로그아웃 처리 함수 호출
    }
  };

  // 로그아웃 처리 함수
  async function handleSignOut() {
    try {
      await signOut({ global: true });
      setIsLoggedIn(false); // 로그인 상태 업데이트
      navigate('/'); // 로그아웃 후 홈으로 리디이렉션
    } catch (error) {
      console.log('로그아웃 에러', error);
    }
  }

  // 닉네임 관련
  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      setUserNickname(userAttributes.nickname || null);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkLoginStatus();
    handleFetchUserAttributes();
  }, []);


  return (
    <>
      <S.Container>
        <Button colorScheme="brand" onClick={onOpen}>
          <GiHamburgerMenu />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <PageSideBar />
          </DrawerContent>
        </Drawer>

        <LogoBox />
        <MenuBar />

        <S.RightBox>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <S.IconStyle border-radius="10px">
              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  alignContent: 'center',
                  margin: '2px',
                }}
              >
                <PersonCircle style={{ width: '30px', margin: 'auto 3px' }} />
                <p style={{ margin: 'auto 10px' }}>{userNickname}</p>
              </div>
            </S.IconStyle>

            <S.IconStyle border-radius="45%">
              <Gear />
            </S.IconStyle>
            <Alarm />
            <Button style={{ marginRight: '0.3rem' }} variant="ghost" onClick={handleLoginOrLogout}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
          </div>
        </S.RightBox>
      </S.Container>
    </>
  );
};

export default PageNavBar;
