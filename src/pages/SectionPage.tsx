import { useEffect, useState } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { sectionData } from '@/api/@types/Section';
import { TemplateNameData } from '@/api/@types/TeamController';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { SectionServices } from '@/api/services/Section';
import { TeamControllerServices } from '@/api/services/TeamController';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import TeamTask from '@/components/writeRetro/task/TeamTask';
import { PersonalSectionTitleName } from '@/constant/section';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const RetroTeamPage = () => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const [section, setSection] = useState<sectionData[]>([]);
  const [retro, setRetro] = useState<RetrospectiveData>();
  const [template, setTemplate] = useState<TemplateNameData[]>();
  const [rendering, setRendering] = useState<boolean>(false);
  const toast = useCustomToast();

  const fetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.onlyGet({ retrospectiveId: retrospectiveId });
      setRetro(data.data);
    } catch (e) {
      toast.error(e);
    }
  };

  const fetchSection = async () => {
    try {
      if (!teamId) {
        const data = await SectionServices.PersonalGet({ retrospectiveId: retrospectiveId });
        setSection(data.data);
      }
      const data = await SectionServices.TeamGet({ retrospectiveId: retrospectiveId, teamId: teamId });
      setSection(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTemplate = async () => {
    try {
      if (retro) {
        const data = await TeamControllerServices.TemplateNameGet({ templateId: retro.templateId });
        setTemplate(data.data);
      }
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchSection();
    fetchRetrospective();
    fetchTemplate();
  }, [retro?.description, template?.values, section.values, rendering]);

  if (!retro) return;

  return (
    <S.Container>
      {retro && <Title name={retro.title} description={retro.description} />}

      <S.SectionBox>
        <Flex flexDirection="column" margin="0 auto">
          <Flex>
            <IoMdInformationCircle size={25} style={{ margin: 'auto 5px' }} />
            <p style={{ fontSize: '20px', margin: '5px' }}>수정을 원한다면, 해당 텍스트를 선택하세요!</p>
          </Flex>
          <Flex>
            {template
              ? template.map(title => (
                  <>
                    <S.FrameStyle>
                      <Label
                        labelName={title.name}
                        labelType="dark"
                        taskCount={section.filter(data => data.sectionName === title.name).length}
                      />
                      <AddTask
                        template={title.id}
                        retrospectiveId={retro?.retrospectiveId}
                        setRendering={setRendering}
                      />
                      {section
                        .filter(key => key.sectionName === title.name)
                        .map(section => (
                          <TeamTask section={section} setRendering={setRendering} teamId={teamId} />
                        ))}
                    </S.FrameStyle>
                  </>
                ))
              : PersonalSectionTitleName.map(title => (
                  <S.FrameStyle>
                    <Label
                      labelName={title.title}
                      labelType="dark"
                      taskCount={section.filter(data => data.sectionName === title.title).length}
                    />
                  </S.FrameStyle>
                ))}
          </Flex>
        </Flex>
      </S.SectionBox>
    </S.Container>
  );
};

export default RetroTeamPage;
