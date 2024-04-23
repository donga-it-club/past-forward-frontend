import { FC, useEffect, useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flex, Image } from '@chakra-ui/react';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';
import * as L from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  name: string;
  description: string;
  thumbnail: string;
  retro: RetrospectiveData;
}

const Title: FC<Props> = ({ name, description, thumbnail, retro }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const [isInviteModalOpen, setInviteModalOpen] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>('');
  const navigate = useNavigate();

  const fetchRetrospectiveImage = async () => {
    if (retro) {
      try {
        const data = await postImageToS3({ filename: thumbnail, method: 'GET' });
        setImageURL(data.data.preSignedUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    fetchRetrospectiveImage();
  });
  return (
    <>
      <S.TitleBox>
        <Image src={imageURL} maxWidth={150} borderRadius="10px" margin="auto 5px" />
        <Flex flexDirection="column" margin="20px 10px">
          <Flex>
            {teamId ? (
              <MdPeopleAlt size="40px" color="#434343" style={{ margin: 'auto 0' }} />
            ) : (
              <IoPerson size="40px" color="#434343" style={{ margin: 'auto 0' }} />
            )}

            <S.TitleText>{name}</S.TitleText>
            <L.InvitationLinkButton
              id="wr_edit"
              style={{ backgroundColor: '#E9E9E9', color: 'black' }}
              onClick={() => {
                navigate(`/revise?retrospectiveId=${retrospectiveId}&teamId=${teamId}`);
              }}
            >
              회고 수정하기
            </L.InvitationLinkButton>
            <L.InvitationLinkButton onClick={() => setInviteModalOpen(true)}>팀원 초대 링크</L.InvitationLinkButton>
            <L.LinkExpirationText>링크는 2시간 후에 만료됩니다.</L.LinkExpirationText>
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
