import { FC, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Button,
  PopoverHeader,
  PopoverBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { RetrospectiveData } from '@/api/@types/Retrospectives';
import { TeamMembersData } from '@/api/@types/TeamController';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { TeamControllerServices } from '@/api/services/TeamController';
import { convertToLocalTime } from '@/components/RetroList/ContentsList';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as M from '@/styles/my/myPage.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  teamId: number;
  members: TeamMembersData[];
  user: UserData;
  retro: RetrospectiveData;
}

const ManageTeamMembers: FC<Props> = ({ teamId, members, user, retro }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isInviteModalOpen, setInviteModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<{ [key: number]: string }>({});
  const toast = useCustomToast();
  const filterData = members.filter(members => members.username.includes(searchTerm));
  // const navigate = useNavigate();

  const DeleteTeamMember = async (id: number) => {
    try {
      if (user && user.userId) {
        await TeamControllerServices.DeleteTeamMembers({ teamId: teamId, userId: id });
      }
      toast.info('팀원을 삭제했습니다.');
      filterData.filter(item => item.userId !== id);
    } catch {
      toast.error('팀원 삭제에 실패했습니다.');
    }
  };

  const fetchImage = async (item: TeamMembersData) => {
    try {
      if (item.profileImage) {
        const response = await postImageToS3({ filename: item.profileImage, method: 'GET' });
        setImage(prev => ({
          ...prev,
          [item.userId]: response.data.preSignedUrl,
        }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const PostAdminStatus = async (member: number) => {
    try {
      await RetrospectiveService.leaderPost({ newLeaderId: member, retrospectiveId: retro.retrospectiveId });
      toast.success('리더 권한을 양도하였습니다.');
      // navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    members.forEach(item => fetchImage(item));
  }, []);

  if (!user) return;

  return (
    <S.ManageStyle>
      <Flex height="46px">
        <S.ManageTitleStyle>팀원 관리</S.ManageTitleStyle>
        <Popover>
          <PopoverTrigger>
            <S.InvitationLinkButton backgroundColor="#EEEEEE" color="black">
              리더 권한 양도
            </S.InvitationLinkButton>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontSize={15}>리더 권한을 양도할 팀원을 선택하세요.</PopoverHeader>
            <PopoverBody minH={200} overflow="auto">
              <Flex flexDirection="column" cursor="pointer">
                {members
                  .filter(member => user.userId !== member.userId)
                  .map(item => (
                    <Flex margin="5px 0" onClick={() => PostAdminStatus(item.userId)}>
                      {item.profileImage ? (
                        <M.UploadImage sizes="40px" width="40px" height="auto" src={image[item.userId]} />
                      ) : (
                        <CgProfile size="40px" color="#DADEE5" />
                      )}

                      <p style={{ margin: 'auto 10px' }}>{item.username ?? '닉네임 없음'}</p>
                    </Flex>
                  ))}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <S.InvitationLinkButton backgroundColor="#2f4dce" color="white" onClick={() => setInviteModalOpen(true)}>
          팀원 참여 링크
        </S.InvitationLinkButton>
        <S.LinkExpirationText>링크는 2시간 후에 만료됩니다.</S.LinkExpirationText>
      </Flex>
      <Flex marginTop="20px">
        <S.ManageSearchInput
          placeholder="검색할 이름을 입력하세요."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value.toLowerCase())}
        />
        {/* <S.ManageSearchButton
          onClick={() => {
            searchTeamMembers(searchTerm);
          }}
        >
          검색
        </S.ManageSearchButton> */}
      </Flex>
      {/* <Flex flexDirection="row-reverse" margin="auto 50px">
        팀원 삭제 후 새로고침하면 해당 팀원을 제외한 팀원리스트를 볼 수 있습니다.
      </Flex> */}

      <S.ManageAlarm>팀원 삭제 후 새로고침하면 해당 팀원을 제외한 팀원리스트를 볼 수 있습니다.</S.ManageAlarm>
      <TableContainer marginTop="40px">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize={20} margin="0 auto">
                닉네임
              </Th>
              <Th fontSize={20} margin="0 auto">
                이메일
              </Th>
              <Th fontSize={20} margin="0 auto">
                회고 참여 일자
              </Th>
              <Th fontSize={20} margin="0 auto">
                작업
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterData &&
              filterData.map(item => {
                return (
                  <Tr>
                    <Td>
                      <Flex>
                        {item.profileImage ? (
                          <M.UploadImage sizes="40px" width="40px" height="auto" src={image[item.userId]} />
                        ) : (
                          <CgProfile size="40px" color="#DADEE5" />
                        )}
                        {item.username ? (
                          <p style={{ margin: 'auto 5px' }}>{item.username}</p>
                        ) : (
                          <S.NotMemberInfo> (닉네임 없음)</S.NotMemberInfo>
                        )}
                      </Flex>
                    </Td>
                    <Td>{item.email ?? <S.NotMemberInfo>(이메일 없음)</S.NotMemberInfo>}</Td>
                    <Td>{convertToLocalTime(item.joinedAt)}</Td>
                    <Td>
                      {user.userId !== item.userId ? (
                        <Popover>
                          <PopoverTrigger>
                            <Button colorScheme="red" fontSize={15} variant="outline">
                              제거
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <p style={{ margin: '20px 10px' }}>해당 팀원을 정말 삭제하시겠습니까?</p>
                            <Flex flexDirection="row-reverse" margin="5px 20px">
                              <Button colorScheme="red" fontSize={12} onClick={() => DeleteTeamMember(item.userId)}>
                                제거
                              </Button>
                            </Flex>
                          </PopoverContent>
                        </Popover>
                      ) : (
                        // <Button colorScheme="red" fontSize={15} onClick={() => DeleteTeamMember(item.userId)}>
                        //   제거
                        // </Button>
                        <S.NotMemberInfo style={{ fontSize: '15px' }}>팀장은 나갈 수 없음</S.NotMemberInfo>
                      )}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>

      <InviteTeamModal isOpen={isInviteModalOpen} onClose={() => setInviteModalOpen(false)} teamId={teamId} />
    </S.ManageStyle>
  );
};

export default ManageTeamMembers;
