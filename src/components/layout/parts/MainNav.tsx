import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import * as S from '@/styles/layout/layout.style';

const MainNav = () => {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/create');
  };
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <S.LeftBox>
        <S.Link href="/#Home" id="header_home">
          Home
        </S.Link>
        <S.Link href="/#Overview" id="header_temp">
          Overview
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
    </Box>
  );
};

export default MainNav;
