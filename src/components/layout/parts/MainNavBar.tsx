import { PersonCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import UserNickname from '@/components/user/UserNickname';
import { useAuth } from '@/hooks/useAuth';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/layout/layout.style';

const MainNavBar = () => {
  const { isLoggedIn, handleLoginOrLogout } = useAuth();
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);

  const navigate = useNavigate();

  const navigateToMyPage = () => {
    navigate('/my');
  };

  const navigateToCreate = () => {
    navigate('/create');
  };

  return (
    <>
      <div style={{ backgroundColor: 'white', zIndex: 1 }}>
        <S.Container>
          <MenuBar />
          <LogoBox />

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
                    cursor: 'pointer',
                  }}
                  onClick={navigateToMyPage}
                >
                  <PersonCircle style={{ width: '30px', margin: 'auto 3px' }} />

                  <p style={{ margin: 'auto 10px' }}>
                    <UserNickname setUserNickname={setUserNickname} />
                    {userNickname}
                  </p>
                </div>
              </S.IconStyle>

              <Button style={{ marginRight: '0.3rem' }} variant="ghost" onClick={handleLoginOrLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
              <S.GetStaredButton onClick={navigateToCreate}>Get Started for Free</S.GetStaredButton>
            </div>
          </S.RightBox>
        </S.Container>
      </div>
    </>
  );
};

export default MainNavBar;
