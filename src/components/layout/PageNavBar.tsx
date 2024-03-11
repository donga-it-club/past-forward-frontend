import * as S from '@/styles/layout/layout.style';
import { Gear, Bell, PersonCircle } from 'react-bootstrap-icons';
import { ReactNode } from 'react';
import PageSideBar from './PageSideBar';

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <S.BGContainer>
      <PageSideBar />
      <S.MainContainer>
        <S.Container>
          <S.LeftBox>
            <S.Link href="#">Home</S.Link>
            <S.Link href="#">Template</S.Link>
            <S.Link href="#">About us</S.Link>
            <S.Link href="#">Contact</S.Link>
            <S.OrdinaryButton>Create</S.OrdinaryButton>
          </S.LeftBox>

          <S.RightBox>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <S.IconStyle borderRadius="10px" width="auto">
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    alignContent: 'center',
                    margin: '2px',
                  }}
                >
                  <PersonCircle style={{ padding: '5px' }} />
                  <p style={{ margin: 'auto 10px' }}>Clayton Santos</p>
                </div>
              </S.IconStyle>

              <S.IconStyle borderRadius="45%" width="20px">
                <Gear />
              </S.IconStyle>
              <S.IconStyle borderRadius="50%" width="20px">
                <Bell />
              </S.IconStyle>
              <S.Link href="#">Logout</S.Link>
            </div>
          </S.RightBox>
        </S.Container>
        <main>{children}</main>
      </S.MainContainer>
    </S.BGContainer>
  );
};

export default NavBar;
