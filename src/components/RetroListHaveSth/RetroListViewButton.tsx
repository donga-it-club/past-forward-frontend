import BoardIcon from '@/assets/RetroListBoardViewIcon.png';
import ListIcon from '@/assets/RetroListLIstViewIcon.png';
import * as S from '../../styles/RetroListHaveSth/RetroListSortButton.style';

interface ViewModeButtonProps {
  viewMode: string;
  onViewModeChange: (mode: string) => void;
}
const RetroListViewButton: React.FC<ViewModeButtonProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <>
      <S.Container>
        <S.Button onClick={() => onViewModeChange('board')} active={viewMode === 'board'}>
          <S.Icon src={BoardIcon} alt="board icon" size={18} />
          <S.Text>Board View</S.Text>
        </S.Button>
        <S.Button onClick={() => onViewModeChange('list')} active={viewMode === 'list'}>
          <S.Icon src={ListIcon} alt="list icon" size={22} />
          <S.Text>List View</S.Text>
        </S.Button>
      </S.Container>
    </>
  );
};

export default RetroListViewButton;
