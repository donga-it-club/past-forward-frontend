import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { TeamMembersData } from '@/api/@types/TeamController';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { TeamControllerServices } from '@/api/services/TeamController';
import RetroTitle from '@/components/writeRetro/layout/RetroTitle';
import ManageTeamMembers from '@/components/writeRetro/revise/ManageTeamMembers';
import ReviseSetting from '@/components/writeRetro/revise/ReviseSetting';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const RetroRevisePage = () => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);

  const [retro, setRetro] = useState<RetrospectiveData>();
  const [members, setMembers] = useState<TeamMembersData[]>([]);
  const [status, setStatus] = useState<string>('NOT_STARTED');
  const toast = useCustomToast();

  const fetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.onlyGet({ retrospectiveId: retrospectiveId });
      setRetro(data.data);
      if (retro) {
        setStatus(retro.status);
      }
    } catch (e) {
      toast.error(e);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      if (teamId) {
        const data = await TeamControllerServices.TeamMemberGet({ teamId: teamId, retrospectiveId: retrospectiveId });
        setMembers(data.data);
      }
      return;
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
    fetchRetrospective();
  }, [retro?.status, members.values]);

  if (!retro) return;

  return (
    <>
      <S.TitleBox>
        <Flex marginLeft="20px">
          <RetroTitle teamId={teamId} name={retro.title} />
        </Flex>
      </S.TitleBox>
      <S.SettingMenuStyle>
        <Tabs colorScheme="brand" isLazy isFitted>
          <TabList margin="0 40px" fontSize={60}>
            <Tab>회고 설정</Tab>
            {retro.type === 'TEAM' ? <Tab>팀원 관리</Tab> : null}
          </TabList>

          <TabPanels>
            <TabPanel>
              <ReviseSetting retro={retro} status={status} setStatus={setStatus} />
            </TabPanel>
            <TabPanel>{members && <ManageTeamMembers teamId={teamId} members={members} />}</TabPanel>
          </TabPanels>
        </Tabs>
      </S.SettingMenuStyle>
    </>
  );
};

export default RetroRevisePage;
