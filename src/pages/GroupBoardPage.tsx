import { useEffect, useState } from 'react';
import { RiFolder6Fill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import {
  GetRetrospectiveGroupRequest,
  GetRetrospectiveGroupResponse,
  GetRetrospectiveGroupNodes,
} from '@/api/@types/Groups';
import { GetRetrospectiveGroup } from '@/api/retroGroupsApi/getGroup';
import GroupBoardList from '@/components/projectRetro/GroupBoardList';
import ManageModal from '@/components/projectRetro/ManageModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/GroupBoard.styles';

const GroupBoard = () => {
  const toast = useCustomToast();
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const groupId = Number(query[1]);

  const [groupData, setGroupData] = useState<GetRetrospectiveGroupResponse['data'] | null>(null);
  const [groupBoardData, setGroupBoardData] = useState<GetRetrospectiveGroupNodes[] | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchGroupBoard = async () => {
      try {
        const requestData: GetRetrospectiveGroupRequest = {
          retrospectiveGroupId: groupId,
        };
        const responseData = await GetRetrospectiveGroup(requestData);
        setGroupData(responseData.data);
        console.log('단일 그룹 내 회고 불러오기', responseData);
      } catch (error) {
        toast.error('단일 그룹 내 회고 불러오기에 실패했습니다.');
      }
    };
    fetchGroupBoard();
  }, []);

  useEffect(() => {
    if (groupData) {
      setGroupBoardData(groupData.retrospectives);
    }
  }, [groupData]);

  return (
    <>
      {isOpen && <ManageModal isClose={() => setIsOpen(false)} />}
      <S.Container>
        <S.TitleContainter>
          <S.TitleText>
            <RiFolder6Fill size={40} style={{ color: '#FFE500', marginRight: '10px' }} />
            {groupData?.title}
          </S.TitleText>
        </S.TitleContainter>
        <S.Wrapper>
          <S.Button onClick={() => setIsOpen(true)}>회고 관리하기</S.Button>
          <GroupBoardList data={groupBoardData} />
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default GroupBoard;
