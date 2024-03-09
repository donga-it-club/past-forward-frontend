// 버튼 2개 묶음 - 화면상 배치 및 모달 클릭 적용
import React, { useState } from 'react';
import styled from 'styled-components';
import TeamRetroCreateButton from './TeamRetroCreateButton';
import PersonalRetroCreateButton from './PersonalRetroCreateButton';
import CreateModal from './CreateModal';

const ButtonListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const SpacedButton = styled.div`
  margin: 0 1rem; // 버튼 간 간격 만듦
  cursor: pointer;
`;

const CreateButtonBox: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateButtonClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      {modalOpen && <CreateModal onClose={() => setModalOpen(false)} />}
      <ButtonListContainer onClick={handleCreateButtonClick}>
        <SpacedButton>
          <TeamRetroCreateButton />
        </SpacedButton>
        <SpacedButton>
          <PersonalRetroCreateButton />
        </SpacedButton>
      </ButtonListContainer>
    </>
  );
};

export default CreateButtonBox;
