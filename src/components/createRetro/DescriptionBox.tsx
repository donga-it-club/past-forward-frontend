import React from 'react';
import { FaLightbulb } from 'react-icons/fa6';
import { Flex } from '@chakra-ui/react';
import PersonalRetroDescription from '@/components/createRetro/PersonalRetroDescription';
import TeamRetroDescription from '@/components/createRetro/TeamRetroDescription';
import * as S from '@/styles/createRetro/DescriptionBox.style';

const DescriptionBox: React.FC = () => {
  return (
    <>
      <S.DescriptionContainer>
        <S.TipBox>
          <div style={{ margin: 'auto 5px' }}>
            <FaLightbulb />
          </div>
          회고 페이지 생성 후, <S.HowToUseText>How to use?</S.HowToUseText>를 클릭하면 더 자세한 활용법을 확인할 수
          있습니다.
        </S.TipBox>
        <Flex>
          <S.SpacedLeft>
            <S.DescriptionTitle backgroundColor="#111b47">
              <span style={{ fontWeight: 'bold' }}>팀 회고 템플릿 소개</span>
            </S.DescriptionTitle>
            <TeamRetroDescription />
          </S.SpacedLeft>
          <S.SpacedRight>
            <S.DescriptionTitle color="#111b47">
              <span style={{ fontWeight: 'bold' }}>개인 회고 템플릿 소개</span>
            </S.DescriptionTitle>
            <PersonalRetroDescription />
          </S.SpacedRight>
        </Flex>
      </S.DescriptionContainer>
    </>
  );
};

export default DescriptionBox;
