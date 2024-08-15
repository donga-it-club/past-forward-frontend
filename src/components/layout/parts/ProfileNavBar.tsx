import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { Button, Drawer, DrawerContent, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react';
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

const PageNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn, handleLoginOrLogout } = useAuth();
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);

  const navigate = useNavigate();
  const navigateToMyPage = () => {
    navigate('/my');
  };

  return (
    <>
      <S.Container>
        <Button colorScheme="brand" onClick={onOpen}>
          <GiHamburgerMenu />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <PageSideBar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Flex justifyContent="space-between" flexGrow={1}>
          <Flex minW="fit-content">
            <LogoBox />
            <MenuBar />
          </Flex>

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
                  onClick={navigateToMyPage}
                >
                  <UserProfileImage width="30px" />
                  <p style={{ margin: 'auto 10px' }}>
                    <UserNickname setUserNickname={setUserNickname} />
                    {userNickname}
                  </p>
                </div>
              </S.IconStyle>
              <Flex display={{ base: 'none', md: 'flex' }}>
                <Alarm />
              </Flex>
              <Button style={{ marginRight: '0.3rem' }} variant="ghost" onClick={handleLoginOrLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
            </div>
          </S.RightBox>
        </Flex>
      </S.Container>
    </>
  );
};

export default PageNavBar;
