import { FC, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Button } from '@chakra-ui/react';
import { AddedImageTeamMember, TeamMembersData } from '@/api/@types/TeamController';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { TeamControllerServices } from '@/api/services/TeamController';
import { UserServices } from '@/api/services/User';
import { convertToLocalTime } from '@/components/RetroList/ContentsList';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as M from '@/styles/my/myPage.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  members: TeamMembersData[];
  teamId: number;
}

const ManageTeamMembers: FC<Props> = ({ members, teamId }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isInviteModalOpen, setInviteModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const [user, setUser] = useState<UserData>();
  const [data, setData] = useState<AddedImageTeamMember[]>();
  const toast = useCustomToast();
  const [rendering, setRendering] = useState<boolean>(false);

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const searchTeamMembers = (searchTerm: string) => {
    if (data) {
      const filterData = data.filter(members => members.username.includes(searchTerm));
      setData(filterData);
      setRendering(prev => !prev);
    }
  };

  const fetchImage = async () => {
    const newData = await Promise.all(
      members.map(async item => {
        const imageURL = await postImageToS3({ filename: item.profileImage, method: 'GET' });
        setImage(imageURL.data.preSignedUrl);
        return { ...item, image };
      }),
    );
    setData(newData);
    setRendering(prev => !prev);
  };

  useEffect(() => {
    if (members) {
      fetchImage();
    }
  }, [data?.values, rendering]);

  const DeleteTeamMember = async () => {
    try {
      if (user && user.userId) {
        await TeamControllerServices.DeleteTeamMembers({ teamId: teamId, userId: user.userId });
      }
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <S.ManageStyle>
      <Flex height="46px">
        <S.ManageTitleStyle>팀원 관리</S.ManageTitleStyle>
        <S.InvitationLinkButton onClick={() => setInviteModalOpen(true)}>팀원 초대 링크</S.InvitationLinkButton>
        <S.LinkExpirationText>링크는 2시간 후에 만료됩니다.</S.LinkExpirationText>
      </Flex>
      <Flex marginTop="20px">
        <S.ManageSearchInput
          placeholder="검색할 이름을 입력하세요."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value.toLowerCase())}
        />
        <S.ManageSearchButton
          onClick={() => {
            searchTeamMembers(searchTerm);
          }}
        >
          검색
        </S.ManageSearchButton>
      </Flex>
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
            {data &&
              data.map(item => {
                return (
                  <Tr>
                    <Td>
                      <Flex>
                        {item.image ? (
                          <M.UploadImage sizes="40px" width="40px" height="auto" src={item.image} />
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
                      {user?.userId !== item.userId ? (
                        <Button colorScheme="red" fontSize={15} onClick={DeleteTeamMember}>
                          제거
                        </Button>
                      ) : (
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
