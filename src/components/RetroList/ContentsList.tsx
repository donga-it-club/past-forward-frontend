import { useEffect, useState } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { IoMdPerson } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';
import { RxCounterClockwiseClock } from 'react-icons/rx'; //before
import { useNavigate } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import { PatchRetrospectiveRequest } from '@/api/@types/Retrospectives';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { patchRetrospective } from '@/api/retrospectivesApi/patchRetrospective';
import { UserServices } from '@/api/services/User';
import Thumbnail from '@/assets/Thumbnail.png';
import Modal from '@/components/RetroList/Modal';
import * as S from '@/styles/RetroList/ContentsList.styles';

interface Content {
  id: number;
  title: string;
  userId: number;
  teamId: number | null;
  templateId: number;
  status: string;
  isBookmarked: boolean;
  thumbnail: string;
  startDate: string;
  createdDate: string;
  updatedDate: string;
  username: string;
}

interface ContentListProps {
  data: Content[];
  viewMode: string;
  searchData: string;
  setBookmarkUpdate: React.Dispatch<React.SetStateAction<boolean>>;
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
  return localTime.toLocaleString(undefined, options); // 로컬 타임존으로 변환하여 문자열로 반환
};

const ContentList: React.FC<ContentListProps> = ({ data, viewMode, searchData, setBookmarkUpdate }) => {
  // const [contentData, setContentData] = useState<Content[]>(data); 받아온데이터
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [image, setImage] = useState<{ [key: number]: string }>({});
  const [user, setUser] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmark = async (itemId: number) => {
    try {
      const requestData: PatchRetrospectiveRequest = {
        retrospectiveId: itemId,
      };
      await patchRetrospective(requestData);
      setBookmarkUpdate(prev => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const openModalForItem = (itemId: number) => {
    setOpenModalId(itemId);
  };

  const closeModalForItem = () => {
    setOpenModalId(null);
  };

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()));
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const filtered = data.filter(item => item.thumbnail !== null); // thumbnail이 null인 항목 필터링
    fetchUser();

    const fetchThumbnailsData = async (item: Content) => {
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
  }, [data]);

  if (!user) return;

  if (isLoading) {
    return (
      <Center w="100%" h="100%" margin="20px 0">
        <Spinner />
      </Center>
    );
  }
  return (
    <>
      {viewMode === 'board' && (
        <S.BoardContainer>
          {filteredData.map(item => (
            <S.Box key={item.id}>
              <S.ImgBox>
                {isLoading ? (
                  <Spinner size="md" />
                ) : (
                  <S.Thumbnail
                    src={item.thumbnail ? image[item.id] : Thumbnail}
                    onLoad={handleImageLoad}
                    onClick={() => navigate(`/sections?retrospectiveId=${item.id}&teamId=${item.teamId}`)}
                  />
                )}
              </S.ImgBox>
              <hr />
              <S.InfoBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.teamId && <MdPeople size={20} />} {!item.teamId && <IoMdPerson size={20} />}
                  <S.RetroTitle onClick={() => navigate(`/sections?retrospectiveId=${item.id}&teamId=${item.teamId}`)}>
                    {item.title}
                  </S.RetroTitle>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    justifyContent: 'center',
                    justifyItems: 'center',
                  }}
                >
                  {item.isBookmarked && (
                    <S.StyledFaStar onClick={() => handleBookmark(item.id)} style={{ color: '#fcea12' }} size="19" />
                  )}
                  {!item.isBookmarked && <S.StyledCiStar onClick={() => handleBookmark(item.id)} size={20} />}
                  <S.StyledHiOutlineDotsHorizontal
                    style={{ color: '#33363F' }}
                    size={20}
                    onClick={() => {
                      if (user.userId === item.userId) {
                        navigate(`/revise?retrospectiveId=${item.id}&teamId=${item.teamId}`);
                      } else {
                        openModalForItem(item.id);
                      }
                    }}
                  />
                  <Modal onClose={closeModalForItem} isOpen={openModalId === item.id} />
                </div>
                <S.RetroUser>
                  {item.username} {user.userId === item.userId && <S.RetroLeader>본인</S.RetroLeader>}
                </S.RetroUser>
                <div></div>
                <S.RetroDate>
                  {item.updatedDate !== item.createdDate
                    ? `${convertToLocalTime(item.updatedDate)} 수정`
                    : convertToLocalTime(item.createdDate)}
                  {/* {item.updatedDate !== item.createdDate ? `${item.updatedDate} 수정` : item.createdDate} */}
                </S.RetroDate>
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
              </S.InfoBox>
            </S.Box>
          ))}
        </S.BoardContainer>
      )}

      {viewMode === 'list' && (
        <div>
          <S.ListContainer>
            <S.ListTopBox>
              <S.ListTypeBox>회고유형</S.ListTypeBox>
              <S.ListTitleBox>회고이름</S.ListTitleBox> <S.ListUserBox>회고리더</S.ListUserBox>
              <S.ListTimeBox>마지막 수정시간</S.ListTimeBox> <S.ListBookmarkBox>즐겨찾기</S.ListBookmarkBox>
              <S.ListProgressBox>회고 진행 여부</S.ListProgressBox>
              <S.ListReviseBox>회고 수정</S.ListReviseBox>
            </S.ListTopBox>
            {filteredData.map(item => (
              <S.ItemBox key={item.id}>
                <S.ListTypeBox>
                  <div style={{ padding: '5px' }}>
                    {item.teamId && <MdPeople size={20} />} {!item.teamId && <IoMdPerson size={20} />}
                  </div>
                </S.ListTypeBox>
                <S.ListTitleBox onClick={() => navigate(`/sections?retrospectiveId=${item.id}&teamId=${item.teamId}`)}>
                  {item.title}
                </S.ListTitleBox>
                <S.ListUserBox>
                  {item.username} {user.userId === item.userId && <S.ListRetroLeader>본인</S.ListRetroLeader>}
                </S.ListUserBox>
                <S.ListTimeBox>
                  {item.updatedDate && item.updatedDate !== item.startDate ? `${item.updatedDate}` : item.startDate}
                </S.ListTimeBox>
                <S.ListBookmarkBox>
                  {item.isBookmarked && (
                    <S.StyledFaStar onClick={() => handleBookmark(item.id)} style={{ color: '#fcea12' }} size="19" />
                  )}
                  {!item.isBookmarked && <S.StyledCiStar onClick={() => handleBookmark(item.id)} size={20} />}
                </S.ListBookmarkBox>
                <S.ListProgressBox>
                  {item.status === 'NOT_STARTED' && (
                    <RxCounterClockwiseClock
                      size={20}
                      style={{ alignItems: 'start', justifySelf: 'end', color: '#5B5B5B' }}
                    />
                  )}
                  {item.status === 'IN_PROGRESS' && (
                    <CgTimelapse size={20} style={{ alignItems: 'start', justifySelf: 'end', color: '#57AD5A' }} />
                  )}
                  {item.status === 'COMPLETED' && (
                    <FaRegCircleCheck size={20} style={{ alignItems: 'start', justifySelf: 'end', color: '#FF1818' }} />
                  )}
                </S.ListProgressBox>
                <S.ListReviseBox>
                  <S.StyledHiOutlineDotsHorizontal
                    style={{ color: '#33363F' }}
                    size={20}
                    onClick={() => {
                      if (user.userId === item.userId) {
                        navigate(`/revise?retrospectiveId=${item.id}&teamId=${item.teamId}`);
                      } else {
                        openModalForItem(item.id);
                      }
                    }}
                  />
                  <Modal onClose={closeModalForItem} isOpen={openModalId === item.id} />
                </S.ListReviseBox>
              </S.ItemBox>
            ))}
          </S.ListContainer>
        </div>
      )}
    </>
  );
};

export default ContentList;
