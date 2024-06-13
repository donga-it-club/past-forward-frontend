import React from 'react';
import { Text } from '@chakra-ui/react';
import logo from '@/../public/PastForwardLogo.svg';
import * as S from '@/styles/user/DefaultHeader.style';

function DefaultHeader() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="로고" />
      <Text fontSize="3xl" as="b" color="#37447E">
        Past-Forward
      </Text>
    </S.HeaderContainer>
  );
}

export default DefaultHeader;
