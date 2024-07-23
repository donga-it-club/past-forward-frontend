import { useState, useEffect } from 'react';
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
import { queryGetRetrospective } from '@/api/retrospectivesApi/getRetrospective';
import { UserServices } from '@/api/services/User';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/ManageModal.styles';
import * as T from '@/styles/projectRetro/Modal.styles';

interface ManageModalProps {
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

const ManageModal: React.FC<ManageModalProps> = ({ isClose }) => {
  const toast = useCustomToast();
  const [user, setUser] = useState<UserData>();
  const [retro, setRetro] = useState<GetRetrospectiveData['data']>();

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
      console.log('retro', retro);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchRetrospective();
  }, [retro?.totalCount]);

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
                    <S.CheckBox>□</S.CheckBox>
                    {item.teamId ? <IoMdPerson size={20} /> : <MdPeople size={20} />}
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
            <S.Button>적용하기</S.Button>
          </S.Modal>
        </T.Container>
      </T.Background>
    </>
  );
};

export default ManageModal;
