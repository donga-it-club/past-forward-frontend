import * as S from '@/styles/layout/layout.style';
import PageNavBar from '@/components/layout/parts/PageNavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.BGContainer>
      <S.MainContainer>
        <PageNavBar />
        <Outlet />
      </S.MainContainer>
    </S.BGContainer>
  );
};

export default Layout;
