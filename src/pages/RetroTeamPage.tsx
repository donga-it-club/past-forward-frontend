import { IoMdInformationCircle } from 'react-icons/io';
import { Flex } from '@chakra-ui/react';
import { mockSection } from '@/api/__mock__/section';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import TeamTask from '@/components/writeRetro/task/TeamTask';
import { sectionTitleName } from '@/constant/section';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const RetroTeamPage = () => {
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
            {sectionTitleName.map(title => (
              <S.FrameStyle>
                <Label
                  labelName={title.title}
                  labelType="dark"
                  taskCount={mockSection.data.filter(data => data.sectionName === title.title).length}
                />
                {mockSection.data
                  .filter(key => key.sectionName === title.title)
                  .map(name => (
                    <TeamTask name={name} />
                  ))}
                <AddTask color="dark" />
              </S.FrameStyle>
            ))}
          </Flex>
        </Flex>
      </S.SectionBox>
    </S.Container>
  );
};

export default RetroTeamPage;
