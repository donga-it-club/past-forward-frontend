import { useState } from 'react';
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
}

const ContentList: React.FC<ContentListProps> = ({ data, viewMode, searchData }) => {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const openModalForItem = (itemId: number) => {
    setOpenModalId(itemId);
  };

  const closeModalForItem = () => {
    setOpenModalId(null);
  };

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()));

  return (
    <div>
      {viewMode === 'board' && (
        <S.BoardContainer>
          {filteredData.map(item => (
            <S.Box key={item.id}>
              <S.ImgBox>
                <S.Thumbnail src={item.thumbnail ? item.thumbnail : Thumbnail} />
              </S.ImgBox>
              <hr />
              <S.InfoBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <S.TeamIcon src={item.teamId ? TeamIcon : PersonalIcon} />
                  <S.RetroTitle>{item.title}</S.RetroTitle>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <S.BookmarkIcon src={item.isBookmarked ? BookmarkIcon_Y : BookmarkIcon_N} /> {/* 북마크 patch */}
                  <S.MoreIcon src={MoreIcon} onClick={() => openModalForItem(item.id)} />
                </div>
                <S.RetroUser>{item.userId}</S.RetroUser>
                <div></div>
                <S.RetroDate> {item.createdDate} 수정</S.RetroDate>
                {/* 수정하면 수정 시각으로 변경*/}
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
                  <S.ListTitleBox> {item.title}</S.ListTitleBox>
                  <S.ListUserBox>
                    <text></text> {/* 생성자 이름 */}
                  </S.ListUserBox>
                  <S.ListTimeBox>
                    {item.createdDate} {/* 수정하면 수정 시각으로 변경*/}
                  </S.ListTimeBox>
                  <S.ListBookmarkBox>
                    <S.Icon src={item.isBookmarked ? BookmarkIcon_Y : BookmarkIcon_N} />
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
                    <S.MoreIconListView src={MoreIcon} onClick={() => openModalForItem(item.id)} />
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
