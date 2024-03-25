import BookmarkButton from './BookmarkButton';
import OrderButton from './OrderButton';
import ProgressButton from './ProgressButton';

import * as S from '@/styles/RetroListHaveSth/ControlBar.style';

interface ControlBarProps {
  onBookmarkButtonClick: () => void;
}

const ControlBar: React.FC<ControlBarProps> = ({ onBookmarkButtonClick }) => {
  return (
    <S.Container>
      <ProgressButton />
      <OrderButton />
      <BookmarkButton onClick={onBookmarkButtonClick} />
    </S.Container>
  );
};

export default ControlBar;
