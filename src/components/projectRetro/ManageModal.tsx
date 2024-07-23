import React, { useState, useEffect } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { IoMdClose } from 'react-icons/io';
import { IoMdPerson } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';
import { RxCounterClockwiseClock } from 'react-icons/rx'; //before
import { GetRetrospectiveData } from '@/api/@types/Retrospectives';
import { UserData } from '@/api/@types/Users';
import { putBoard } from '@/api/retroGroupsApi/putBoard';
import { queryGetRetrospective } from '@/api/retrospectivesApi/getRetrospective';
import { UserServices } from '@/api/services/User';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/ManageModal.styles';
import * as T from '@/styles/projectRetro/Modal.styles';

interface ManageModalProps {
  groupId: number;
  isClose: () => void;
}

export const convertToLocalTime = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const localTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return localTime.toLocaleString(undefined, options);
};

const ManageModal: React.FC<ManageModalProps> = ({ groupId, isClose }) => {
  const toast = useCustomToast();
  const [user, setUser] = useState<UserData>();
  const [retro, setRetro] = useState<GetRetrospectiveData['data']>();
  const [requestData, setRequestData] = useState<number[]>([]);

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const fetchRetrospective = async () => {
    try {
      const data = await queryGetRetrospective({
        page: 0,
        size: 999,
        order: 'NEWEST',
        status: 'ALL',
        keyword: '',
        isBookmarked: false,
      });
      setRetro(data.data);
    } catch (e) {
      toast.error('회고 불러오기에 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchUser();
    fetchRetrospective();
  }, [retro?.totalCount]);

  const handlePutBoard = async () => {
    try {
      await putBoard({ retrospectiveGroupId: groupId, retrospectiveIds: requestData });
      toast.info('그룹에 회고가 정상적으로 추가되었습니다.');
      isClose();
    } catch (e) {
      toast.error('그룹 회고 추가에 실패했습니다.');
    }
  };

  const handleInputCheck = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setRequestData(prev => [...prev, id]);
    } else {
      setRequestData(prev => prev.filter(retroId => retroId !== id));
    }
  };

  return (
    <>
      <T.Background>
        <T.Container>
          <S.Modal>
            <IoMdClose
              onClick={isClose}
              size={20}
              style={{
                color: '#a9a9a9',
                marginLeft: 'auto',
                marginRight: '10px',
                marginTop: '10px',
                cursor: 'pointer',
              }}
            />
            <S.Title>프로젝트로 회고 관리하기</S.Title>
            <S.Box>
              {retro &&
                retro.nodes.map(item => (
                  <S.ListItem key={item.id}>
                    <S.RetroBox>
                      <S.CheckBox type="checkbox" id="board_check" onChange={handleInputCheck(item.id)}></S.CheckBox>
                    </S.RetroBox>
                    <S.RetroBox>{item.teamId ? <IoMdPerson size={20} /> : <MdPeople size={20} />}</S.RetroBox>
                    <S.RetroTitle>{item.title}</S.RetroTitle>
                    <S.RetroUserBox>
                      <S.RetroUser>{item.username}</S.RetroUser>
                      {user?.userId === item.userId && <S.RetroLeader>본인</S.RetroLeader>}
                    </S.RetroUserBox>
                    <S.RetroBox>{convertToLocalTime(item.updatedDate)}</S.RetroBox>
                    <S.RetroBox>
                      {item.isBookmarked ? <FaStar size={20} style={{ color: '#fcea12' }} /> : <CiStar size={20} />}
                    </S.RetroBox>
                    <S.RetroBox>
                      {item.status === 'NOT_STARTED' ? (
                        <RxCounterClockwiseClock size={20} style={{ color: '#5B5B5B' }} />
                      ) : item.status === 'IN_PROGRESS' ? (
                        <CgTimelapse size={20} style={{ color: '#57AD5A' }} />
                      ) : (
                        <FaRegCircleCheck size={20} style={{ color: '#FF1818' }} />
                      )}
                    </S.RetroBox>
                  </S.ListItem>
                ))}
            </S.Box>
            <S.Button onClick={handlePutBoard}>적용하기</S.Button>
          </S.Modal>
        </T.Container>
      </T.Background>
    </>
  );
};

export default ManageModal;
