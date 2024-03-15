// 버튼 2개 묶음 - 화면상 배치 및 모달 클릭 적용
import React from 'react';
import * as S from '@/styles/createRetro/CreateButtonBox.style';
import TeamRetroCreateButton from '@/components/createRetro/TeamRetroCreateButton';
import PersonalRetroCreateButton from '@/components/createRetro/PersonalRetroCreateButton';

interface CreateButtonBoxProps {
  onClick: () => void;
}

const CreateButtonBox: React.FC<CreateButtonBoxProps> = ({ onClick }) => {
  return (
    <>
      <S.ButtonListContainer>
        <S.SpacedButton onClick={onClick}>
          <TeamRetroCreateButton />
        </S.SpacedButton>
        <S.SpacedButton onClick={onClick}>
          <PersonalRetroCreateButton />
        </S.SpacedButton>
      </S.ButtonListContainer>
    </>
  );
};

export default CreateButtonBox;
