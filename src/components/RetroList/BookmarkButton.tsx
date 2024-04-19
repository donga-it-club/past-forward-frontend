import { useState } from 'react';
import BookmarkIcon from '@/assets/BookmarkIcon_Y.png';
import * as S from '@/styles/RetroList/BookmarkButton.styles';

interface BookmarkButtonProps {
  handleBookmarkButton: (option: boolean) => void;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ handleBookmarkButton }) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    handleBookmarkButton(!isBookmarked);
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
