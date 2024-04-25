import { useState } from 'react';
import BoardIcon from '@/assets/RetroListBoardViewIcon.png';
import ListIcon from '@/assets/RetroListLIstViewIcon.png';
import * as S from '@/styles/RetroList/ViewButton.style';

interface ViewModeButtonProps {
  viewMode: string;
  onViewModeChange: (mode: string) => void;
}

type ActivePartType = 'board' | 'list' | null;

const ViewButton: React.FC<ViewModeButtonProps> = ({ viewMode, onViewModeChange }) => {
  const [activePart, setActivePart] = useState<ActivePartType>('board');

  const handleBoardClick = () => {
    setActivePart(activePart === 'board' ? null : 'board');
    onViewModeChange('board');
  };

  const handleListClick = () => {
    setActivePart(activePart === 'list' ? null : 'list');
    onViewModeChange('list');
  };

  return (
    <div>
      <S.Container>
        <S.ViewButton
          activePart={activePart}
          onClick={e => e.stopPropagation()} // 버블링 방지
        >
          <span
            className="board-part"
            onClick={() => {
              handleBoardClick();
            }}
            id="rl_boardview"
          >
            {viewMode === 'board'}
            <S.Icon src={BoardIcon} alt="board icon" size={18} />
            <S.Text>Board View</S.Text>
          </span>
          <span
            className="list-part"
            onClick={() => {
              handleListClick();
            }}
            id="rl_listview"
          >
            <S.Icon src={ListIcon} alt="list icon" size={22} />
            <S.Text>List View</S.Text>
          </span>
        </S.ViewButton>
      </S.Container>
    </div>
  );
};

export default ViewButton;
