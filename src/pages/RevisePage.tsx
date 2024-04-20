import { useEffect, useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { TeamMembersData } from '@/api/@types/TeamController';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { TeamControllerServices } from '@/api/services/TeamController';
import ManageTeamMembers from '@/components/writeRetro/revise/ManageTeamMembers';
import NotTeamMemberModal from '@/components/writeRetro/revise/NotTeamMemberModal';
import ReviseSetting from '@/components/writeRetro/revise/ReviseSetting';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const RetroRevisePage = () => {
  //query
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const [retro, setRetro] = useState<RetrospectiveData>();
  const [members, setMembers] = useState<TeamMembersData[]>();
  const [status, setStatus] = useState<string>('NOT_STARTED');
  const toast = useCustomToast();

  const FetchRetrospective = async () => {
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
    FetchRetrospective();
    fetchTeamMembers();
  }, [retro?.status]);

  if (!retro) return;

  return (
    <>
      <S.TitleBox>
        <Flex>
          <MdPeopleAlt size="40px" color="#434343" style={{ margin: 'auto 0', marginLeft: '30px' }} />
          <S.TitleText>FistRetro</S.TitleText>
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
            <TabPanel>
              {members ? <ManageTeamMembers members={members} teamId={teamId} /> : <NotTeamMemberModal />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </S.SettingMenuStyle>
    </>
  );
};

export default RetroRevisePage;
