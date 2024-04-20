import { useState } from 'react';
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
        <S.StarIcon />
        <S.Text>Bookmark</S.Text>
      </S.Button>
    </>
  );
};

export default BookmarkButton;
