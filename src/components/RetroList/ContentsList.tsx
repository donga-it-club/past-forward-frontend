import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PatchRetrospectiveRequest } from '@/api/@types/Retrospectives';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { patchRetrospective } from '@/api/retrospectivesApi/patchRetrospective';
import BookmarkIcon_N from '@/assets/BookmarkIcon_N.png';
import BookmarkIcon_Y from '@/assets/BookmarkIcon_Y.png';
import MoreIcon from '@/assets/MoreIcon.png';
import PersonalIcon from '@/assets/PersonalIcon.png';
import ProgressBefore from '@/assets/Progress_Before.png';
import ProgressDone from '@/assets/Progress_Done.png';
import ProgressIng from '@/assets/Progress_Ing.png';
import TeamIcon from '@/assets/TeamIcon.png';
import Thumbnail from '@/assets/Thumbnail.png';
import Modal from '@/components/RetroList/Modal';
import UserNickname from '@/components/user/UserNickname';
import { useCustomToast } from '@/hooks/useCustomToast';
import { userNicknameState } from '@/recoil/user/userAtom';
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
}

interface ContentListProps {
  data: Content[];
  viewMode: string;
  searchData: string;
  setBookmarkUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  // handleStatus: (option: string) => void;
}

const ContentList: React.FC<ContentListProps> = ({ data, viewMode, searchData, setBookmarkUpdate }) => {
  // const [contentData, setContentData] = useState<Content[]>(data); 받아온데이터
  const [userNickname, setUserNickname] = useRecoilState(userNicknameState);
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const toast = useCustomToast();
  const [image, setImage] = useState<{ [key: number]: string }>({});

  const handleBookmark = async (itemId: number) => {
    try {
      const requestData: PatchRetrospectiveRequest = {
        retrospectiveId: itemId,
      };
      const response = await patchRetrospective(requestData);
      console.log('북마크 patch 요청 완료', response);
      setBookmarkUpdate(prev => !prev);
    } catch (error) {
      // console.error('북마크 patch 요청 실패:', error);
      toast.error(error);
    }
  };

  useEffect(() => {
    const fetchThumbnailsData = async (item: Content) => {
      try {
        if (item.thumbnail) {
          const imageResponse = await postImageToS3({
            filename: item.thumbnail,
            method: 'GET',
          });
          console.log('s3 사진 받아오기 성공', imageResponse.data.preSignedUrl);
          // const filenameWithExtension = `${imageResponse.data.preSignedUrl}.png`; // 파일 확장자명...
          setImage(prevImage => ({
            ...prevImage,
            [item.id]: imageResponse.data.preSignedUrl,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    data.forEach(item => fetchThumbnailsData(item));
  }, [data]);

  const openModalForItem = (itemId: number) => {
    setOpenModalId(itemId);
  };

  const closeModalForItem = () => {
    setOpenModalId(null);
  };

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()));
  console.log('filter', filteredData);
  const navigate = useNavigate();

  return (
    <div>
      {viewMode === 'board' && (
        <S.BoardContainer>
          {filteredData.map(item => (
            <S.Box key={item.id}>
              <S.ImgBox>
                <S.Thumbnail src={item.thumbnail ? image[item.id] : Thumbnail} />
              </S.ImgBox>
              <hr />
              <S.InfoBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <S.TeamIcon src={item.teamId ? TeamIcon : PersonalIcon} />
                  <S.RetroTitle onClick={() => navigate(`/sections?retrospectiveId=${item.id}&teamId=${item.teamId}`)}>
                    {item.title}
                  </S.RetroTitle>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <S.BookmarkIcon
                    src={item.isBookmarked ? BookmarkIcon_Y : BookmarkIcon_N}
                    onClick={() => handleBookmark(item.id)}
                  />
                  <S.MoreIcon
                    src={MoreIcon}
                    // onClick={() => openModalForItem(item.id)}
                    onClick={() => {
                      if (item.userId === item.id) {
                        // 수정 권한 없을 때(생성자가 아닐 때) 처리 로직 다시 짜기
                        openModalForItem(item.id);
                      } else {
                        navigate(`/revise?retrospectiveId=${item.id}&teamId=${item.teamId}`);
                      }
                    }}
                  />
                </div>
                <S.RetroUser>
                  <UserNickname setUserNickname={setUserNickname} /> {/* 생성자 이름(유저 식별 필요) */}
                  {userNickname}
                </S.RetroUser>
                <div></div>
                <S.RetroDate>
                  {item.updatedDate && item.updatedDate !== item.startDate
                    ? `${item.updatedDate} 수정`
                    : item.startDate}
                </S.RetroDate>
                <S.ProgressIcon
                  src={
                    item.status === 'NOT_STARTED'
                      ? ProgressBefore
                      : item.status === 'IN_PROGRESS'
                        ? ProgressIng
                        : ProgressDone
                  }
                />
                <Modal onClose={closeModalForItem} isOpen={openModalId === item.id} />
              </S.InfoBox>
            </S.Box>
          ))}
        </S.BoardContainer>
      )}

      {viewMode === 'list' && (
        <>
          <S.ListContainer>
            <S.ListTopBox>
              <S.ListTitleBox>회고이름</S.ListTitleBox> <S.ListUserBox>생성자</S.ListUserBox>
              <S.ListTimeBox>마지막 수정시간</S.ListTimeBox> <S.ListBookmarkBox>즐겨찾기</S.ListBookmarkBox>
              <S.ListLinkBox>회고 진행 여부</S.ListLinkBox>
              <S.ListProgressBox>회고 수정</S.ListProgressBox>
            </S.ListTopBox>

            <div>
              {filteredData.map(item => (
                <S.ItemBox key={item.id}>
                  <S.ListTitleBox onClick={() => navigate(`/section?retrospectiveId=${item.id}&teamId=${item.teamId}`)}>
                    {item.title}
                  </S.ListTitleBox>
                  <S.ListUserBox>
                    <UserNickname setUserNickname={setUserNickname} /> {/* 생성자이름(유저 식별 필요) */}
                    {userNickname}
                  </S.ListUserBox>
                  <S.ListTimeBox>
                    {item.updatedDate && item.updatedDate !== item.startDate ? `${item.updatedDate}` : item.startDate}
                  </S.ListTimeBox>
                  <S.ListBookmarkBox>
                    <S.Icon
                      src={item.isBookmarked ? BookmarkIcon_Y : BookmarkIcon_N}
                      onClick={() => handleBookmark(item.id)}
                    />
                    {/* 북마크 patch */}
                  </S.ListBookmarkBox>
                  <S.ListProgressBox>
                    <S.Icon
                      src={
                        item.status === 'NOT_STARTED'
                          ? ProgressBefore
                          : item.status === 'IN_PROGRESS'
                            ? ProgressIng
                            : ProgressDone
                      }
                    />
                  </S.ListProgressBox>
                  <S.ListLinkBox>
                    <S.MoreIconListView
                      src={MoreIcon}
                      // onClick={() => openModalForItem(item.id)}
                      onClick={() => {
                        if (item.userId === item.id) {
                          // 수정 권한 없을 때(생성자가 아닐 때) 처리 로직 다시 짜기
                          openModalForItem(item.id);
                        } else {
                          navigate(`/revise?retrospectiveId=${item.id}&teamId=${item.teamId}`);
                        }
                      }}
                    />
                    <Modal onClose={closeModalForItem} isOpen={openModalId === item.id} />
                  </S.ListLinkBox>
                </S.ItemBox>
              ))}
            </div>
          </S.ListContainer>
        </>
      )}
    </div>
  );
};

export default ContentList;
