import { useState } from 'react';
import BookmarkIcon from '@/assets/BookmarkIcon_Y.png';
import * as S from '@/styles/RetroListHaveSth/BookmarkButton.styles';

const BookmarkButton: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <S.Button onClick={handleBookmark} isBookmarked={isBookmarked}>
        <S.Icon src={BookmarkIcon} />
        <S.Text>Bookmark</S.Text>
      </S.Button>
    </>
  );
};

export default BookmarkButton;
