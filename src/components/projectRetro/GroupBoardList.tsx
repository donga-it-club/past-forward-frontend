import { useEffect, useState } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';
import { Spinner } from '@chakra-ui/react';
import { GetRetrospectiveGroupNodes } from '@/api/@types/Groups';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { UserServices } from '@/api/services/User';
import Thumbnail from '@/assets/Thumbnail.png';
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
  return localTime.toLocaleString(undefined, options); // 로컬 타임존으로 변환하여 문자열로 반환
};

const GroupBoardList: React.FC<GroupBoardListProps> = ({ data }) => {
  const toast = useCustomToast();
  const [user, setUser] = useState<UserData>();
  const [image, setImage] = useState<{ [key: number]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleImageLoad = () => {
    setIsLoading(false);
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
      const filtered = data.filter(item => item.thumbnail !== null); // thumbnail이 null인 항목 필터링
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
      {data && data.length !== 0 ? (
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
                  <T.RetroTitle>{item.title}</T.RetroTitle>{' '}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    justifyContent: 'center',
                    justifyItems: 'center',
                  }}
                >
                  {item.isBookmarked ? <T.StyledFaStar /> : <T.StyledCiStar />} <T.StyledHiOutlineDotsHorizontal />
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
