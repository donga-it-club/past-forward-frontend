import BookmarkButton from './BookmarkButton';
import ProgressButton from './ProgressButton';
import SortButton from './SortButton';
import * as S from '@/styles/RetroListHaveSth/ControlBar.style';

interface ControlBarProps {
  onSortButtonClick: () => void;
  onBookmarkButtonClick: () => void;
}

const ControlBar: React.FC<ControlBarProps> = ({ onSortButtonClick, onBookmarkButtonClick }) => {
  return (
    <S.Container>
      <ProgressButton />
      <SortButton onClick={onSortButtonClick} />
      <BookmarkButton onClick={onBookmarkButtonClick} />
    </S.Container>
  );
};

export default ControlBar;
