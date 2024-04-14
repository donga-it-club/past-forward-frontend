import { useEffect, useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { RetrospectiveResponse } from '@/api/@types/Retrospectives';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import ManageTeamMembers from '@/components/writeRetro/revise/ManageTeamMembers';
import ReviseSetting from '@/components/writeRetro/revise/ReviseSetting';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const RetroRevisePage = () => {
  const { id } = useParams();
  console.log({ id });
  const [retro, setRetro] = useState<RetrospectiveResponse>();
  // const toast = useCustomToast();

  const FetchRetrospective = async () => {
    try {
      const data = await RetrospectiveService.put({
        retrospectiveId: 1,
        title: 'gg',
        teamId: 1,
        description: 'ggggg',
        status: 'COMPLETED',
        thumbnail: '/Home.png',
      });
      if (!data) return;
      setRetro(data);
      console.log(retro);
    } catch (e) {
      console.error(e);
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
            <TabPanel>
              <ManageTeamMembers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </S.SettingMenuStyle>
    </>
  );
};

export default RetroRevisePage;
