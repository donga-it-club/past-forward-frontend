import { IoMdInformationCircle } from 'react-icons/io';
import { Flex } from '@chakra-ui/react';
import Title from '@/components/writeRetro/layout/Title';
import { ContainTeamTask } from '@/components/writeRetro/task/ContainTeamTask';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const RetroTeamPage = () => {
  return (
    <S.Container>
      <Title />
      <S.SectionBox>
        <Flex flexDirection="column" margin="0 auto">
          <Flex>
            <IoMdInformationCircle size={25} style={{ margin: 'auto 5px' }} />
            <p style={{ fontSize: '20px', margin: '5px' }}>수정을 원한다면, 해당 텍스트를 선택하세요!</p>
          </Flex>
          <ContainTeamTask />
        </Flex>
      </S.SectionBox>
    </S.Container>
  );
};

export default RetroTeamPage;
