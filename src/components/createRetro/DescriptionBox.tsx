import React from 'react';
import * as S from '@/styles/createRetro/DescriptionBox.style';
import TeamRetroDescription from '@/components/createRetro/TeamRetroDescription';
import PersonalRetroDescription from '@/components/createRetro/PersonalRetroDescription';

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
