import { FC, useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';
import * as L from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  name: string | undefined;
}

const Title: FC<Props> = ({ name }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const [isInviteModalOpen, setInviteModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 7, margin: '20px 10px' }}>
          <div style={{ display: 'flex' }}>
            <MdPeopleAlt size="40px" color="#434343" style={{ margin: 'auto 0' }} />

            <S.TitleText>{name}</S.TitleText>
            <L.InvitationLinkButton onClick={() => setInviteModalOpen(true)}>팀원 초대 링크</L.InvitationLinkButton>
            <L.LinkExpirationText>링크는 2시간 후에 만료됩니다.</L.LinkExpirationText>
          </div>

          <S.SubTitleText>
            첫 회고 진행 - 앞으로 남은 회고는 2번! <br />
          </S.SubTitleText>
        </div>

        <S.SaveSettingBox style={{ flex: 1 }}>
          <S.SettingButton
            id="wr_edit"
            onClick={() => {
              navigate(`/revise?retrospectiveId=${retrospectiveId}&teamId=${teamId}`);
            }}
          >
            <IoIosMore size={'40px'} color="#B1B2B2" />
          </S.SettingButton>
        </S.SaveSettingBox>
        <InviteTeamModal isOpen={isInviteModalOpen} onClose={() => setInviteModalOpen(false)} teamId={teamId} />
      </S.TitleBox>
    </>
  );
};

export default Title;
