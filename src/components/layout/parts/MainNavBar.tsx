import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import PageSideBar from './PageSideBar';
import Alarm from '@/components/alarm/Alarm';
import UserNickname from '@/components/user/UserNickname';
import UserProfileImage from '@/components/user/UserProfileImage';
import { useAuth } from '@/hooks/useAuth';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

const MainNavBar = () => {
  const { isLoggedIn, handleLoginOrLogout } = useAuth();
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const navigateToMyPage = () => {
    navigate('/my');
  };

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          zIndex: 999,
          borderBottom: '1px solid rgba(184, 184, 184, 0.5)',
          position: 'fixed',
          left: 0,
          right: 0,
        }}
      >
        <S.Container>
          <Button colorScheme="brand" onClick={onOpen} margin="0 10px">
            <GiHamburgerMenu />
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <PageSideBar onClose={onClose} />
            </DrawerContent>
          </Drawer>
          <MenuBar />
          <LogoBox />

          <S.RightBox>
            {isLoggedIn ? (
              <>
                <S.IconStyle border-radius="10px">
                  <div
                    style={{
                      display: 'flex',
                      textAlign: 'center',
                      alignContent: 'center',
                      margin: '2px',
                      cursor: 'pointer',
                    }}
                    onClick={navigateToMyPage}
                  >
                    <UserProfileImage width="30px" />
                    <p style={{ margin: 'auto 10px' }}>
                      <UserNickname setUserNickname={setUserNickname} />
                      {userNickname}
                    </p>
                  </div>
                </S.IconStyle>
                <Alarm />
              </>
            ) : null}

            <Button
              style={{ marginRight: '0.3rem' }}
              variant="ghost"
              onClick={handleLoginOrLogout}
              id="header_login"
              fontSize="15px"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
          </S.RightBox>
        </S.Container>
      </div>
    </>
  );
};

export default MainNavBar;
