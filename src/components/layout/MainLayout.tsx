import * as S from '@/styles/layout/layout.style';
import { Outlet } from 'react-router-dom';
import MainNavBar from './parts/MainNavBar';

const MainLayout = () => {
  return (
    <S.BGContainer>
      <S.MainContainer>
        <MainNavBar />
        <Outlet />
      </S.MainContainer>
    </S.BGContainer>
  );
};

export default MainLayout;
