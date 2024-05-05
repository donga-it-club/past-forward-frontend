import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { TStatus } from '@/api/@types/@asConst';
import PersonalRetroCreateButton from '@/components/createRetro/PersonalRetroCreateButton';
import TeamRetroCreateButton from '@/components/createRetro/TeamRetroCreateButton';
import CreateModal from '@/components/createRetro/modal/CreateModal';
import * as S from '@/styles/createRetro/CreateButtonBox.style';

const CreateButtonBox: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [templateId, setTemplateId] = useState<number | null>(null);
  const [type, setType] = useState<'TEAM' | 'PERSONAL'>('TEAM');
  const [status, setStatus] = useState<keyof TStatus>('NOT_STARTED');

  const handleTeamButtonClick = () => {
    setTemplateId(1);
    setType('TEAM'); // TEAM으로 type 설정
    setStatus('NOT_STARTED'); // 초기 상태
    onOpen();
  };

  const handlePersonalButtonClick = () => {
    setTemplateId(2);
    setType('PERSONAL'); // PERSONAL로 type 설정
    setStatus('NOT_STARTED'); // 초기 상태
    onOpen();
  };

  return (
    <>
      <S.ButtonListContainer>
        <S.SpacedButton onClick={handleTeamButtonClick} className="create_team">
          <TeamRetroCreateButton />
        </S.SpacedButton>
        <S.SpacedButton onClick={handlePersonalButtonClick} className="create_personal">
          <PersonalRetroCreateButton />
        </S.SpacedButton>
      </S.ButtonListContainer>
      <CreateModal isOpen={isOpen} onClose={onClose} templateId={templateId} type={type} status={status} />
    </>
  );
};

export default CreateButtonBox;
