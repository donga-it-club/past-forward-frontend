import { Outlet } from 'react-router-dom';
import PageNavBar from '@/components/layout/parts/ProfileNavBar';
import * as S from '@/styles/layout/layout.style';

const ProfileLayout = () => {
  return (
    <S.BGContainer>
      <S.MainContainer>
        <PageNavBar />
        <Outlet />
      </S.MainContainer>
    </S.BGContainer>
  );
};

export default ProfileLayout;
