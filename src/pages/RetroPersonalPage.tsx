import { IoMdInformationCircle } from 'react-icons/io';
import { Flex } from '@chakra-ui/react';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import PersonalTask from '@/components/writeRetro/task/PersonalTask';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const RetroPersonalPage = () => {
  return (
    <S.Container>
      <Title />
      <S.SectionBox>
        <Flex flexDirection="column">
          <Flex>
            <IoMdInformationCircle size={25} style={{ margin: 'auto 5px' }} />
            <p style={{ fontSize: '20px', margin: '5px' }}>수정을 원한다면, 해당 텍스트를 선택하세요!</p>
          </Flex>
          <Flex>
            <S.FrameStyle>
              <Label labelName="Keep" labelType="dark" taskCount={3} />
              <PersonalTask />
              <PersonalTask />
              <PersonalTask />
              <AddTask color="dark" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Problem" labelType="light" taskCount={3} />
              <PersonalTask />
              <AddTask color="light" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Try" labelType="dark" taskCount={3} />
              <PersonalTask />
              <AddTask color="dark" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Action Items" labelType="light" taskCount={3} />
              <PersonalTask />
              <AddTask color="light" />
            </S.FrameStyle>
          </Flex>
        </Flex>
      </S.SectionBox>
    </S.Container>
  );
};

export default RetroPersonalPage;
