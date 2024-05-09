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
    setTemplateId(1); // KPT를 초기값으로 함
    setType('TEAM'); // TEAM으로 type 설정
    setStatus('NOT_STARTED'); // 초기 상태
    onOpen();
  };

  const handlePersonalButtonClick = () => {
    // setTemplateId(2); // Kudos를 초기 값으로 함
    setTemplateId(1); // KPT를 초기값으로 함
    setType('PERSONAL'); // PERSONAL로 type 설정
    setStatus('NOT_STARTED'); // 초기 상태
    onOpen();
  };

  return (
    <>
      <S.ButtonListContainer>
        <S.SpacedButton onClick={handleTeamButtonClick}>
          <TeamRetroCreateButton />
        </S.SpacedButton>
        <S.SpacedButton onClick={handlePersonalButtonClick}>
          <PersonalRetroCreateButton />
        </S.SpacedButton>
      </S.ButtonListContainer>
      {type === 'PERSONAL' && (
        <CreateModal
          isOpen={isOpen}
          onClose={onClose}
          templateId={templateId}
          type={type}
          status={status}
          name="create_personal"
        />
      )}
      {type === 'TEAM' && (
        <CreateModal
          isOpen={isOpen}
          onClose={onClose}
          templateId={templateId}
          type={type}
          status={status}
          name="create_team"
        />
      )}
    </>
  );
};

export default CreateButtonBox;
