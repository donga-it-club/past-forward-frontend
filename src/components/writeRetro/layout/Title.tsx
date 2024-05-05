import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import RetroTitle from './RetroTitle';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';
import * as L from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  name: string;
  description: string;
}

const Title: FC<Props> = ({ name, description }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const [isInviteModalOpen, setInviteModalOpen] = useState<boolean>(false);
  // const [imageURL, setImageURL] = useState<{ [key: number]: string }>({});
  const navigate = useNavigate();

  // const fetchRetrospectiveImage = async (item: string) => {
  //   if (item) {
  //     try {
  //       const data = await postImageToS3({ filename: item, method: 'GET' });
  //       setImageURL(prev => ({
  //         ...prev,
  //         [retro.retrospectiveId]: data.data.preSignedUrl,
  //       }));
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchRetrospectiveImage(String(thumbnail));
  // }, []);
  return (
    <>
      <S.TitleBox>
        {/* <Image src="MainPageLogo.svg" maxWidth={150} borderRadius="10px" margin="auto 5px" /> */}
        <Flex flexDirection="column" margin="20px 10px">
          <Flex>
            <RetroTitle teamId={teamId} name={name} />
            <L.InvitationLinkButton
              id="wr_edit"
              style={{ backgroundColor: '#E9E9E9', color: 'black' }}
              onClick={() => {
                navigate(`/revise?retrospectiveId=${retrospectiveId}&teamId=${teamId}`);
              }}
            >
              회고 수정하기
            </L.InvitationLinkButton>
            {teamId ? (
              <>
                <L.InvitationLinkButton onClick={() => setInviteModalOpen(true)}>팀원 초대 링크</L.InvitationLinkButton>
                <L.LinkExpirationText>링크는 2시간 후에 만료됩니다.</L.LinkExpirationText>
              </>
            ) : null}
          </Flex>

          <S.SubTitleText>
            {description} <br />
          </S.SubTitleText>
        </Flex>

        <InviteTeamModal isOpen={isInviteModalOpen} onClose={() => setInviteModalOpen(false)} teamId={teamId} />
      </S.TitleBox>
    </>
  );
};

export default Title;
