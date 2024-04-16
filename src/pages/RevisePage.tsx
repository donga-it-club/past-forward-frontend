import { useEffect, useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { onlyGetRetrospectiveResponse } from '@/api/@types/Retrospectives';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import ManageTeamMembers from '@/components/writeRetro/revise/ManageTeamMembers';
import NotTeamMemberModal from '@/components/writeRetro/revise/NotTeamMemberModal';
import ReviseSetting from '@/components/writeRetro/revise/ReviseSetting';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const RetroRevisePage = () => {
  const [retro, setRetro] = useState<onlyGetRetrospectiveResponse>();
  const toast = useCustomToast();
  const FetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.onlyGet({ retrospectiveId: 8 });
      if (!data) return;
      setRetro(data);
      console.log('retro', retro);
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    FetchRetrospective();
  }, []);
  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex' }}>
          <MdPeopleAlt size="40px" color="#434343" style={{ margin: 'auto 0', marginLeft: '30px' }} />
          <S.TitleText>FistRetro</S.TitleText>
        </div>
      </S.TitleBox>
      {/* <SettingMenu></SettingMenu> */}
      <S.SettingMenuStyle>
        <Tabs colorScheme="brand" isFitted>
          <TabList margin="0 40px" fontSize={60}>
            <Tab>회고 설정</Tab>
            <Tab>팀원 관리</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ReviseSetting />
            </TabPanel>
            <TabPanel>{retro && retro.data.teamId ? <ManageTeamMembers /> : <NotTeamMemberModal />}</TabPanel>
          </TabPanels>
        </Tabs>
      </S.SettingMenuStyle>
    </>
  );
};

export default RetroRevisePage;
