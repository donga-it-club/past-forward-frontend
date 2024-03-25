import React, { useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import LoginModal from '@/components/login/LoginModal';
import * as S from '@/styles/layout/layout.style';

const MainNavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
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

            <S.Link onClick={handleLoginButtonClick}>Logout</S.Link>
            <S.GetStaredButton>Get Started for Free</S.GetStaredButton>
          </div>
        </S.RightBox>
      </S.Container>

      {/* 로그인 모달 렌더링*/}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
    </>
  );
};

export default MainNavBar;
