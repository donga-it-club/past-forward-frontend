import * as S from '@/styles/layout/layout.style';
import { Bell, Gear, PersonCircle } from 'react-bootstrap-icons';

const PageNavBar = () => {
  return (
    <>
      <S.Container>
        <S.LeftBox>
          <S.Link href="#" id="header_home">
            Home
          </S.Link>
          <S.Link href="#" id="header_temp">
            Template
          </S.Link>
          <S.Link href="#" id="header_about">
            About us
          </S.Link>
          <S.Link href="#" id="header_contact">
            Contact
          </S.Link>
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

            <S.IconStyle borderRadius="45%">
              <Gear />
            </S.IconStyle>
            <S.IconStyle borderRadius="50%">
              <Bell />
            </S.IconStyle>
            <S.Link href="#">Logout</S.Link>
          </div>
        </S.RightBox>
      </S.Container>
    </>
  );
};

export default PageNavBar;
