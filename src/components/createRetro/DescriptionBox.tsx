import React from 'react';
import PersonalRetroDescription from '@/components/createRetro/PersonalRetroDescription';
import TeamRetroDescription from '@/components/createRetro/TeamRetroDescription';
import * as S from '@/styles/createRetro/DescriptionBox.style';

const DescriptionBox: React.FC = () => {
  return (
    <>
      <S.DescriptionContainer>
        <S.SpacedDescription>
          <TeamRetroDescription />
        </S.SpacedDescription>
        <S.SpacedDescription>
          <PersonalRetroDescription />
        </S.SpacedDescription>
      </S.DescriptionContainer>
    </>
  );
};

export default DescriptionBox;
