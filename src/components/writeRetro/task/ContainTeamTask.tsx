import { useEffect, useState } from 'react';
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
import TeamTask from '@/components/writeRetro/task/TeamTask';
import { PersonalSectionTitleName } from '@/constant/section';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const ContainTeamTask = () => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const [section, setSection] = useState<sectionData[]>([]);
  const [retro, setRetro] = useState<RetrospectiveData>();
  const [template, setTemplate] = useState<TemplateNameData[]>();
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
      toast.error(e);
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
  }, [retro?.description, template?.values, section.reduce((acc, cur) => acc + cur.sectionId, 0)]);

  return (
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
                <AddTask template={title.id} retrospectiveId={retro?.retrospectiveId} />
                {section
                  .filter(key => key.sectionName === title.name)
                  .map(section => (
                    <TeamTask section={section} like={section.likeCnt} content={section.content} />
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
  );
};
