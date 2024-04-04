import { useEffect, useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import * as S from '@/styles/layout/layout.style';

const MainNavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

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
    } else {
      navigate('/login');
    }
  };

  // 로그아웃을 처리 함수
  async function handleSignOut() {
    try {
      await signOut({ global: true });
      setIsLoggedIn(false); // 로그인 상태 업데이트
      navigate('/'); // 로그아웃 후 홈으로 리디이렉션
    } catch (error) {
      console.log('로그아웃 에러', error);
    }
  }

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
                  }}
                >
                  <PersonCircle style={{ width: '30px', margin: 'auto 3px' }} />
                  <p style={{ margin: 'auto 10px' }}>Clayton Santos</p>
                </div>
              </S.IconStyle>

              <Button style={{ marginRight: '0.3rem' }} variant="ghost" onClick={handleLoginOrLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
              <S.GetStaredButton>Get Started for Free</S.GetStaredButton>
            </div>
          </S.RightBox>
        </S.Container>
      </div>
    </>
  );
};

export default MainNavBar;
