import { Text } from '@chakra-ui/react';
import Logo from '@/../public/logo.svg';
import * as S from '@/styles/layout/layout.style';
const LogoBox = () => {
  return (
    <>
      <S.LogoText color="brand" href="/#">
        <img src={Logo} style={{ minWidth: 'fit-content', margin: 'auto 0' }} />
        <Text margin="auto 0" minWidth="fit-content" display={{ base: 'none', md: 'block' }}>
          Past Forward
        </Text>
      </S.LogoText>
    </>
  );
};

export default LogoBox;
