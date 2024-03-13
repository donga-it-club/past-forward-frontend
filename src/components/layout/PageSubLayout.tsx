import * as S from '@/styles/layout/layout.style';
import { ReactNode } from 'react';
import PageSideBar from './parts/PageSideBar';
import PageNavBar from './parts/PageNavBar';

interface Props {
  children: ReactNode;
}

const SubLayout = ({ children }: Props) => {
  return (
    <S.BGContainer>
      <PageSideBar />
      <S.MainContainer>
        <PageNavBar />
        <main>{children}</main>
      </S.MainContainer>
    </S.BGContainer>
  );
};

export default SubLayout;
