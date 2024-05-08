import { useEffect, useState } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { sectionData } from '@/api/@types/Section';
import { TemplateNameData } from '@/api/@types/TeamController';
import { UserData } from '@/api/@types/Users';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { SectionServices } from '@/api/services/Section';
import { TeamControllerServices } from '@/api/services/TeamController';
import { UserServices } from '@/api/services/User';
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
  const teamId = query[3] === 'null' ? null : Number(query[3]);
  const [section, setSection] = useState<sectionData[]>([]);
  const [retro, setRetro] = useState<RetrospectiveData>();
  const [template, setTemplate] = useState<TemplateNameData[]>();
  const [rendering, setRendering] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>();
  const toast = useCustomToast();

  const fetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.onlyGet({ retrospectiveId: retrospectiveId });
      setRetro(data.data);
    } catch (e) {
      toast.error(e);
    }
  };

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const fetchSection = async () => {
    try {
      const data = await SectionServices.get({ retrospectiveId: retrospectiveId, teamId: teamId ?? null });
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
    fetchUser();
  }, [retro?.description, rendering]);

  if (!retro) return;
  if (!user) return;

  return (
    <S.Container>
      {retro && <Title name={retro.title} description={retro.description} user={user} retro={retro} />}

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
                          <TeamTask
                            section={section}
                            setRendering={setRendering}
                            teamId={teamId ?? null}
                            imageURL={section.thumbnail}
                            user={user}
                          />
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
