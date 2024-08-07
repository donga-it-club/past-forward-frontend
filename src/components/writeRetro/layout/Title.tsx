import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Center, Flex, Image, Spinner } from '@chakra-ui/react';
import RetroTitle from './RetroTitle';
import defaultImage from '@/../public/defaultImage.png';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import { ExplainButton } from '@/components/writeRetro/explainModal/explainRetro';
import * as S from '@/styles/writeRetroStyles/Layout.style';
import * as L from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  name: string;
  description: string;
  user: UserData;
  retro: RetrospectiveData;
}

const Title: FC<Props> = ({ name, description, retro, user }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = query[3] === 'null' ? null : Number(query[3]);
  const [isInviteModalOpen, setInviteModalOpen] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<{ [key: number]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchRetrospectiveImage = async (item: string) => {
    if (item) {
      try {
        const data = await postImageToS3({ filename: item, method: 'GET' });
        setImageURL(prev => ({
          ...prev,
          [retro.retrospectiveId]: data.data.preSignedUrl,
        }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImage;
  };

  useEffect(() => {
    fetchRetrospectiveImage(String(retro.thumbnail));
    const timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearTimeout(timer);
    }, 1500);
  }, []);
  return (
    <>
      <S.TitleBox>
        {isLoading ? (
          <Center w="40px" margin="20px 0">
            <Spinner />
          </Center>
        ) : (
          <Image
            src={imageURL[retro.retrospectiveId]}
            onError={handleError}
            maxWidth={{ base: '30vw', md: '150px' }}
            borderRadius="10px"
            margin={{ base: 'auto 30px', md: 'auto 5px' }}
          />
        )}
        <Flex flexDirection="column" margin="20px 0px 20px 30px" flexGrow={1}>
          <S.TitleStyleBox>
            <RetroTitle teamId={teamId} name={name} />
            <div style={{ display: 'flex' }}>
              {user.userId === retro.userId && (
                <L.InvitationLinkButton
                  id="wr_edit"
                  backgroundColor="#E9E9E9"
                  color="black"
                  onClick={() => {
                    navigate(`/revise?retrospectiveId=${retrospectiveId}&teamId=${teamId}`);
                  }}
                >
                  회고 수정하기
                </L.InvitationLinkButton>
              )}

              {teamId ? (
                <>
                  <L.InvitationLinkButton
                    backgroundColor="#2f4dce"
                    color="white"
                    onClick={() => setInviteModalOpen(true)}
                  >
                    팀원 초대 링크
                  </L.InvitationLinkButton>
                  <L.LinkExpirationText>링크는 2시간 후에 만료됩니다.</L.LinkExpirationText>
                </>
              ) : null}
            </div>
          </S.TitleStyleBox>

          <S.SubTitleText>
            {description} <br />
          </S.SubTitleText>
          <S.ExplainBox>
            <ExplainButton templateId={retro.templateId}></ExplainButton>
          </S.ExplainBox>
        </Flex>

        <InviteTeamModal isOpen={isInviteModalOpen} onClose={() => setInviteModalOpen(false)} teamId={teamId} />
      </S.TitleBox>
    </>
  );
};

export default Title;
