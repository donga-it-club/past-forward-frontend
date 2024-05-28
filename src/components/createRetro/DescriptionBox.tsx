import React from 'react';
import { FaLightbulb } from 'react-icons/fa6';
import { Flex } from '@chakra-ui/react';
import * as S from '@/styles/createRetro/DescriptionBox.style';

const DescriptionBox: React.FC = () => {
  return (
    <>
      <S.DescriptionContainer>
        <Flex></Flex>
        <S.TipBox>
          <div style={{ margin: 'auto 5px' }}>
            <FaLightbulb />
          </div>
          회고 페이지 생성 후, <S.HowToUseText>How to use?</S.HowToUseText>를 클릭하면 더 자세한 활용법을 확인할 수
          있습니다.
        </S.TipBox>
      </S.DescriptionContainer>
    </>
  );
};

export default DescriptionBox;
