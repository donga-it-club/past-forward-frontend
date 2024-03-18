import React from 'react';
import Thumbnail from '@/assets/Thumbnail.png';
import MoreIcon from '@/assets/MoreIcon.png';
import * as S from '../../styles/RetroListHaveSth/ContentsList.styles';

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
}

const ContentList: React.FC<ContentListProps> = ({ status, viewMode }) => {
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

  const filteredData = data.filter(item => item.status === status);

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
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentList;
