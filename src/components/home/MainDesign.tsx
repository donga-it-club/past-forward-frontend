import { useNavigate } from 'react-router-dom';
import { Button, Flex, Image } from '@chakra-ui/react';
import { mainDesign } from '@/../public/mainDesign.svg';
import { useAuth } from '@/hooks/useAuth';
import * as S from '@/styles/layout/layout.style';

const MainDesign = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLoginOrLogout } = useAuth();

  const navigateToCreate = () => {
    navigate('/create');
  };

  return (
    <div style={{ paddingTop: '130px' }}>
      {/* <Text
          position="absolute"
          left="40%"
          fontSize="1.2rem"
          top="500px"
          fontFamily="serif"
          color="blue.800"
          fontWeight={500}
        >
          Moving Forward from the Past
        </Text> */}
      <Image src={mainDesign} width="70%" margin="0 auto" marginTop={100} />
      <Flex
        padding="0 auto"
        margin={{ md: '20px auto', base: '10px' }}
        justifyContent="center"
        fontSize={{ md: '20px', base: '15px' }}
        flexDirection="column"
      >
        <Flex justifyContent="center" margin="0 20px">
          과거를 회고하며 미래로 나아가는 과정을 촉진하는 의미를 가진 이름으로 &apos; Past&apos; (과거)와 &apos;Forward
          &apos;(앞으로 나아가다)를 결합하여 비전을 표현합니다.
        </Flex>
        <S.GetStaredButton
          onClick={navigateToCreate}
          id={isLoggedIn ? 'header_startpf_login' : 'header_startpf_logout'}
        >
          Get Started for Free
        </S.GetStaredButton>
        <Button variant="ghost" onClick={handleLoginOrLogout} id="header_login" fontSize="15px" margin="10px 40%">
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </Flex>
    </div>
  );
};

export default MainDesign;
