import React, { useState } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import PersonalRetroDescription from '../components/createRetro/PersonalRetroDescription';
import TeamRetroDescription from '../components/createRetro/TeamRetroDescription';
import { TStatus } from '@/api/@types/@asConst';
import PersonalRetroCreateButton from '@/components/createRetro/PersonalRetroCreateButton';
import TeamRetroCreateButton from '@/components/createRetro/TeamRetroCreateButton';
import CreateModal from '@/components/createRetro/modal/CreateModal';
import * as S from '@/styles/createRetro/CreateButtonBox.style';
import * as D from '@/styles/createRetro/DescriptionBox.style';

const CreateRetroPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [templateId, setTemplateId] = useState<number | null>(null);
  const [type, setType] = useState<'TEAM' | 'PERSONAL'>('TEAM');
  const [status, setStatus] = useState<keyof TStatus>('NOT_STARTED');

  const handleTeamButtonClick = () => {
    setTemplateId(null); // KPT를 초기값으로 함
    setType('TEAM'); // TEAM으로 type 설정
    setStatus('NOT_STARTED'); // 초기 상태
    onOpen();
  };

  const handlePersonalButtonClick = () => {
    // setTemplateId(2); // Kudos를 초기 값으로 함
    setTemplateId(null); // KPT를 초기값으로 함
    setType('PERSONAL'); // PERSONAL로 type 설정
    setStatus('NOT_STARTED'); // 초기 상태
    onOpen();
  };

  return (
    <>
      <S.ButtonListContainer>
        <Flex flexDirection="column" flex="1">
          <S.SpacedButton onClick={handleTeamButtonClick}>
            <TeamRetroCreateButton />
          </S.SpacedButton>
          <D.SpacedLeft>
            <D.DescriptionTitle backgroundColor="#111b47">
              <span style={{ fontWeight: 'bold' }}>팀 회고 템플릿 </span>
            </D.DescriptionTitle>
            <TeamRetroDescription />
          </D.SpacedLeft>
        </Flex>
        <Flex flexDirection="column" flex="1">
          <S.SpacedButton onClick={handlePersonalButtonClick}>
            <PersonalRetroCreateButton />
          </S.SpacedButton>
          <D.SpacedRight>
            <D.DescriptionTitle color="#111b47">
              <span style={{ fontWeight: 'bold' }}>개인 회고 템플릿 </span>
            </D.DescriptionTitle>
            <PersonalRetroDescription />
          </D.SpacedRight>
        </Flex>
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

      {/* <DescriptionBox /> */}
    </>
  );
};

export default CreateRetroPage;
