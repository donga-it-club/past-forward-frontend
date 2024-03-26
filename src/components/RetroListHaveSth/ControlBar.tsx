import BookmarkButton from '@/components/RetroListHaveSth/BookmarkButton';
import OrderButton from '@/components/RetroListHaveSth/OrderButton';
import ProgressButton from '@/components/RetroListHaveSth/ProgressButton';

import * as S from '@/styles/RetroListHaveSth/ControlBar.styles';

const ControlBar: React.FC = () => {
  return (
    <S.Container>
      <ProgressButton />
      <OrderButton />
      <BookmarkButton />
    </S.Container>
  );
};

export default ControlBar;
