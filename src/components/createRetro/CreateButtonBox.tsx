import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import PersonalRetroCreateButton from '@/components/createRetro/PersonalRetroCreateButton';
import TeamRetroCreateButton from '@/components/createRetro/TeamRetroCreateButton';
import CreateModal from '@/components/createRetro/modal/CreateModal';
import * as S from '@/styles/createRetro/CreateButtonBox.style';

const CreateButtonBox: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <S.ButtonListContainer>
        <S.SpacedButton onClick={onOpen}>
          <TeamRetroCreateButton />
        </S.SpacedButton>
        <S.SpacedButton onClick={onOpen}>
          <PersonalRetroCreateButton />
        </S.SpacedButton>
      </S.ButtonListContainer>
      <CreateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CreateButtonBox;
