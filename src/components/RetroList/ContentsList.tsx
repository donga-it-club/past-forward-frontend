import React from 'react';
import BookmarkIcon_Y from '@/assets/BookmarkIcon_Y.png';
import LinkIcon from '@/assets/Link.png';
import MoreIcon from '@/assets/MoreIcon.png';
import ProgressBefore from '@/assets/Progress_Before.png';
import Thumbnail from '@/assets/Thumbnail.png';
import * as S from '@/styles/RetroList/ContentsList.styles';

interface Content {
  id: number;
  title: string;
  status: string;
  userId: number | null;
  teamId: number | null;
}

interface ContentListProps {
  status: string;
  viewMode: string;
  searchData: string;
}

const ContentList: React.FC<ContentListProps> = ({ status, viewMode, searchData }) => {
  const data: Content[] = [
    { id: 1, title: '회고1', status: 'Teams', userId: null, teamId: 1 },
    { id: 2, title: '회고2', status: 'Teams', userId: null, teamId: 2 },
    { id: 3, title: '회고3', status: 'Teams', userId: null, teamId: 3 },
    { id: 4, title: '회고4', status: 'Teams', userId: null, teamId: 4 },
    { id: 5, title: '회고5', status: 'Personal', userId: 1, teamId: null },
    { id: 6, title: '회고6', status: 'Personal', userId: 2, teamId: null },
    { id: 7, title: '회고7', status: 'Personal', userId: 3, teamId: null },
    { id: 8, title: '회고8', status: 'Personal', userId: 4, teamId: null },
    { id: 9, title: '회고9', status: 'Personal', userId: 5, teamId: null },
    { id: 10, title: '회고10', status: 'Personal', userId: 5, teamId: null },
    { id: 11, title: '회고11', status: 'All files', userId: 5, teamId: null },
  ];

  const filteredData = data.filter(
    item => item.status === status && item.title.toLowerCase().includes(searchData.toLowerCase()),
  );

  const isBookmarked: boolean = true;

  return (
    <div>
      {viewMode === 'board' && (
        <S.Container>
          {filteredData.map(item => (
            <S.Box key={item.id}>
              <S.ImgBox>
                <S.Thumbnail src={Thumbnail} />
              </S.ImgBox>
              <hr />
              <S.InfoBox>
                {item.title}
                <S.MoreIcon src={MoreIcon} />
              </S.InfoBox>
            </S.Box>
          ))}
        </S.Container>
      )}

      {viewMode === 'list' && (
        <>
          <S.ListContainer>
            <S.ListTopBox>
              <S.ListTitleBox>회고이름</S.ListTitleBox> <S.ListUserBox>생성자</S.ListUserBox>{' '}
              <S.ListTimeBox>마지막 수정시간</S.ListTimeBox> <S.ListBookmarkBox>즐겨찾기</S.ListBookmarkBox>{' '}
              <S.ListLinkBox>공유링크</S.ListLinkBox>
              <S.ListProgressBox> 회고진행여부</S.ListProgressBox>
            </S.ListTopBox>

            <div>
              {filteredData.map(item => (
                <S.ItemBox key={item.id}>
                  <S.ListTitleBox> {item.title}</S.ListTitleBox>
                  <S.ListUserBox>
                    <text></text> {/* 생성자 이름 */}
                  </S.ListUserBox>
                  <S.ListTimeBox>
                    <text> </text> {/* 수정시간 */}
                  </S.ListTimeBox>
                  <S.ListBookmarkBox>{isBookmarked && <S.Icon src={BookmarkIcon_Y} />}</S.ListBookmarkBox>
                  <S.ListLinkBox>
                    <S.Icon src={LinkIcon} />
                  </S.ListLinkBox>
                  <S.ListProgressBox>
                    <S.Icon src={ProgressBefore} />
                  </S.ListProgressBox>
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
