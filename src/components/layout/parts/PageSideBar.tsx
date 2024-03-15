import { CaretRightFill, PeopleFill, Person, PersonCircle } from 'react-bootstrap-icons';
import * as S from '@/styles/layout/layout.style';

const PageSideBar = () => {
  return (
    <S.SideBarBGContainer>
      <S.LogoBox>
        <S.LogoText href="/#">Past Forward</S.LogoText>
      </S.LogoBox>
      <S.ProfileLink>
        <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
        <a href="/my">
          <S.MainName>Clayton Santos</S.MainName>
          <S.MailName>Clayton@gmail.com</S.MailName>
        </a>
      </S.ProfileLink>
      <S.MiniBox>
        <div style={{ padding: '2px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CaretRightFill /> <Person style={{ marginRight: '5px' }} />
            <a href="/WriteRetroTeamPage" style={{ color: '#111b47', textDecoration: 'none' }}>
              Personal Retro
            </a>
          </div>
        </div>
        <S.DivingLine />
      </S.MiniBox>
      <S.MiniBox>
        <div style={{ padding: '2px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CaretRightFill /> <PeopleFill style={{ marginRight: '5px' }} />
            <a href="/create" style={{ color: '#111b47', textDecoration: 'none' }}>
              Team Retro
            </a>
          </div>
        </div>
        <S.DivingLine />
      </S.MiniBox>
    </S.SideBarBGContainer>
  );
};

export default PageSideBar;
