import * as S from '@/styles/layout/layout.style';

const MenuBar = () => {
  return (
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
  );
};

export default MenuBar;
