import * as S from '@/styles/layout/layout.style';
import PageNavBar from '@/components/layout/parts/ProfileNavBar';
import { Outlet } from 'react-router-dom';

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
