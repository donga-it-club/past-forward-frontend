import { BsPersonCircle } from 'react-icons/bs';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Button } from '@chakra-ui/react';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const ManageTeamMembers = () => {
  return (
    <S.ManageStyle>
      <div style={{ height: '46px', display: 'flex' }}>
        <S.ManageTitleStyle>팀원 관리</S.ManageTitleStyle>
        <S.InvitationLinkButton>팀원 초대 링크</S.InvitationLinkButton>
        <S.LinkExpirationText>링크는 2시간 후에 만료됩니다.</S.LinkExpirationText>
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <S.ManageSearchInput placeholder="이름 또는 이메일 주소를 검색"></S.ManageSearchInput>
        <S.ManageSearchButton>검색</S.ManageSearchButton>
      </div>
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
            <Tr>
              <Td>
                <Flex>
                  <BsPersonCircle style={{ margin: 'auto 10px' }} size={30} />
                  <p style={{ margin: 'auto 0' }}>이채연</p>
                </Flex>
              </Td>
              <Td>2115891@donga.ac.kr</Td>
              <Td>2024-03-12 12:50</Td>
              <Td>
                <Button colorScheme="red" fontSize={15}>
                  제거
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </S.ManageStyle>
  );
};

export default ManageTeamMembers;
