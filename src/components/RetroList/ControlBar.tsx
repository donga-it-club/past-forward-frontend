import BookmarkButton from '@/components/RetroList/BookmarkButton';
import OrderButton from '@/components/RetroList/OrderButton';
import ProgressButton from '@/components/RetroList/ProgressButton';

import * as S from '@/styles/RetroList/ControlBar.styles';

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
