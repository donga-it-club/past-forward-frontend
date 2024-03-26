import React from 'react';
import PersonalRetroDescription from '@/components/createRetro/PersonalRetroDescription';
import TeamRetroDescription from '@/components/createRetro/TeamRetroDescription';
import * as S from '@/styles/createRetro/DescriptionBox.style';

const DescriptionBox: React.FC = () => {
  return (
    <>
      <S.DescriptionContainer>
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
      </S.DescriptionContainer>
    </>
  );
};

export default DescriptionBox;
