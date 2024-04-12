import { useEffect, useState } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { GetSectionResponse } from '@/api/@types/Section';
import { mockSection } from '@/api/__mock__/section';
import { SectionServices } from '@/api/services/Section';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import PersonalTask from '@/components/writeRetro/task/PersonalTask';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const RetroPersonalPage = () => {
  const [section, setSection] = useState<GetSectionResponse>();
  const toast = useCustomToast();
  const location = useLocation();
  console.log(location);

  const FetchSection = async () => {
    try {
      const data = await SectionServices.get({
        retrospectiveId: 1,
        teamId: 2,
      });
      if (!data) return;
      if (data) {
        setSection(data);
      }
      console.log('data', data.data);
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    FetchSection();
  }, []);

  if (!section) return;

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
              {mockSection.data
                .filter(key => key.sectionName === 'Keep')
                .map(name => (
                  <PersonalTask name={name} />
                ))}

              <AddTask color="dark" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Problem" labelType="light" taskCount={3} />
              {mockSection.data
                .filter(key => key.sectionName === 'Problem')
                .map(name => (
                  <PersonalTask name={name} />
                ))}
              <AddTask color="light" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Try" labelType="dark" taskCount={3} />
              {mockSection.data
                .filter(key => key.sectionName === 'Try')
                .map(name => (
                  <PersonalTask name={name} />
                ))}
              <AddTask color="dark" />
            </S.FrameStyle>
            <S.FrameStyle>
              <Label labelName="Action Items" labelType="light" taskCount={3} />
              {mockSection.data
                .filter(key => key.sectionName === 'Action Items')
                .map(name => (
                  <PersonalTask name={name} />
                ))}
              <AddTask color="light" />
            </S.FrameStyle>
          </Flex>
        </Flex>
      </S.SectionBox>
    </S.Container>
  );
};

export default RetroPersonalPage;
