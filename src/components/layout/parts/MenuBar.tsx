import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/layout/layout.style';

const MenuBar = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate('/create');
  };

  return (
    <S.LeftBox>
      <S.Link href="/#Home" id="header_home">
        Home
      </S.Link>
      <S.Link href="/#Template" id="header_temp">
        Template
      </S.Link>
      <S.Link href="/#AboutUs" id="header_about">
        About us
      </S.Link>
      <S.Link href="/#Contact" id="header_contact">
        Contact
      </S.Link>
      <S.OrdinaryButton onClick={navigateToCreate} id="header_create">
        Create
      </S.OrdinaryButton>
    </S.LeftBox>
  );
};

export default MenuBar;
