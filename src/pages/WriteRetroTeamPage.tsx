import { IoMdInformationCircle } from 'react-icons/io';
import { Flex } from '@chakra-ui/react';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import { TeamActionItemsTask } from '@/components/writeRetro/task/TeamActionItemsTask';
import TeamTask from '@/components/writeRetro/task/TeamTask';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const WriteRetroTeamPage = () => {
  return (
    <S.Container>
      <Title />
      <S.SectionBox>
        <Flex flexDirection="column">
          <Flex>
            <IoMdInformationCircle size={25} style={{ margin: 'auto 0' }} />
            <p style={{ fontSize: '20px', margin: '5px' }}>수정을 원한다면, 해당 텍스트를 선택하세요!</p>
          </Flex>

          <Flex>
            <S.FrameStyle>
              <Label labelName="Kudos" labelType="dark" taskCount={3} />

              <TeamTask />
              <TeamTask />
              <TeamTask />
              <AddTask color="dark" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Went Well" labelType="light" taskCount={3} />
              <TeamTask />
              <AddTask color="light" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="To Improve" labelType="dark" taskCount={3} />
              <TeamTask />
              <AddTask color="dark" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Action Items" labelType="light" taskCount={3} />
              <TeamActionItemsTask />
              <AddTask color="light" />
            </S.FrameStyle>
          </Flex>
        </Flex>
      </S.SectionBox>
    </S.Container>
  );
};

export default WriteRetroTeamPage;
