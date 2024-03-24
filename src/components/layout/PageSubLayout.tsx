import { Outlet } from 'react-router-dom';
import PageSideBar from './parts/PageSideBar';
import PageNavBar from './parts/ProfileNavBar';
import * as S from '@/styles/layout/layout.style';

const SubLayout = () => {
  return (
    <S.BGContainer>
      <PageSideBar />
      <S.MainContainer>
        <PageNavBar />
        <Outlet />
      </S.MainContainer>
    </S.BGContainer>
  );
};

export default SubLayout;
