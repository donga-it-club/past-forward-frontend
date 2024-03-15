import * as S from '@/styles/layout/layout.style';
import PageSideBar from './parts/PageSideBar';
import PageNavBar from './parts/PageNavBar';
import { Outlet } from 'react-router-dom';

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
