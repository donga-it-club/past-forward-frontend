import { PersonCircle } from 'react-bootstrap-icons';
import LogoBox from './LogoBox';
import MenuBar from './MenuBar';
import * as S from '@/styles/layout/layout.style';

const MainNavBar = () => {
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
            <S.IconStyle borderRadius="10px">
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

            <S.Link href="#">Logout</S.Link>
            <S.GetStaredButton>Get Started for Free</S.GetStaredButton>
          </div>
        </S.RightBox>
      </S.Container>
    </>
  );
};

export default MainNavBar;
