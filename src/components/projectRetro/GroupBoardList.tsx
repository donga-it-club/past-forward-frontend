import { useEffect, useState } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';
import { RxCounterClockwiseClock } from 'react-icons/rx'; //before
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { GetRetrospectiveGroupNodes } from '@/api/@types/Groups';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { UserServices } from '@/api/services/User';
import Thumbnail from '@/assets/Thumbnail.png';
import ReviseModal from '@/components/RetroList/Modal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as T from '@/styles/RetroList/ContentsList.styles';
import * as S from '@/styles/projectRetro/GroupBoardList.styles';

interface GroupBoardListProps {
  data: GetRetrospectiveGroupNodes[] | null;
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

const GroupBoardList: React.FC<GroupBoardListProps> = ({ data }) => {
  const navigate = useNavigate();
  const toast = useCustomToast();
  const [user, setUser] = useState<UserData>();
  const [image, setImage] = useState<{ [key: number]: string }>({});
  const [openReviseModalId, setOpenReviseModalId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const openModalForItem = (itemId: number) => {
    setOpenReviseModalId(itemId);
  };

  const closeModalForItem = () => {
    setOpenReviseModalId(null);
  };

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    if (data) {
      const filtered = data.filter(item => item.thumbnail !== null);
      fetchUser();

      const fetchThumbnailsData = async (item: GetRetrospectiveGroupNodes) => {
        try {
          if (item.thumbnail) {
            const imageResponse = await postImageToS3({
              filename: item.thumbnail,
              method: 'GET',
            });
            setImage(prevImage => ({
              ...prevImage,
              [item.id]: imageResponse.data.preSignedUrl,
            }));
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      if (filtered.length) {
        filtered.forEach(item => fetchThumbnailsData(item));
      } else {
        setIsLoading(false);
      }
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <S.Wrapper>
          <Spinner size="xl" style={{ color: '#a9a9a9' }} />
        </S.Wrapper>
      ) : data && data.length !== 0 ? (
        <S.Container>
          {data?.map(item => (
            <S.Box key={item.id}>
              <T.ImgBox>
                {isLoading ? (
                  <Spinner size="md" />
                ) : (
                  <T.Thumbnail src={item.thumbnail ? image[item.id] : Thumbnail} onLoad={handleImageLoad} />
                )}
              </T.ImgBox>
              <hr />
              <T.InfoBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.teamId && <MdPeople size={20} />} {!item.teamId && <IoMdPerson size={20} />}
                  <T.RetroTitle onClick={() => navigate(`/sections?retrospectiveId=${item.id}&teamId=${item.teamId}`)}>
                    {item.title}
                  </T.RetroTitle>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    justifyContent: 'center',
                    justifyItems: 'center',
                  }}
                >
                  {item.isBookmarked ? (
                    <FaStar size={20} style={{ color: '#fcea12', cursor: 'pointer' }} />
                  ) : (
                    <CiStar size={20} style={{ cursor: 'pointer' }} />
                  )}
                  <T.StyledHiOutlineDotsHorizontal
                    onClick={() => {
                      if (user && user.userId === item.userId) {
                        navigate(`/revise?retrospectiveId=${item.id}&teamId=${item.teamId}`);
                      } else {
                        openModalForItem(item.id);
                      }
                    }}
                  />
                  <ReviseModal onClose={closeModalForItem} isOpen={openReviseModalId === item.id} />
                </div>
                <T.RetroUser>
                  {item.username}
                  {user && user.userId === item.userId && <T.RetroLeader>본인</T.RetroLeader>}
                </T.RetroUser>
                <div></div>
                <T.RetroDate>
                  {item.updatedDate !== item.createdDate
                    ? `${convertToLocalTime(item.updatedDate)} 수정`
                    : convertToLocalTime(item.createdDate)}
                </T.RetroDate>
                {item.status === 'NOT_STARTED' && (
                  <RxCounterClockwiseClock
                    size={15}
                    style={{ alignItems: 'start', justifySelf: 'end', color: '#5B5B5B' }}
                  />
                )}
                {item.status === 'IN_PROGRESS' && (
                  <CgTimelapse size={15} style={{ alignItems: 'start', justifySelf: 'end', color: '#57AD5A' }} />
                )}
                {item.status === 'COMPLETED' && (
                  <FaRegCircleCheck size={15} style={{ alignItems: 'start', justifySelf: 'end', color: '#FF1818' }} />
                )}
              </T.InfoBox>
            </S.Box>
          ))}
        </S.Container>
      ) : (
        <S.Wrapper>
          <S.Text>그룹 내 회고가 없습니다.</S.Text>
        </S.Wrapper>
      )}
    </>
  );
};

export default GroupBoardList;
