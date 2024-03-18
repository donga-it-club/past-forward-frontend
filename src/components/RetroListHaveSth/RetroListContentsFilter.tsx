import * as S from '../../styles/RetroListHaveSth/RetroListContentsFilter.style';

type RetroListContentsFilterProps = {
  status: string;
  onStatusChange: (newStatus: string) => void;
};

const RetroListContentsFilter: React.FC<RetroListContentsFilterProps> = ({ status, onStatusChange }) => {
  return (
    <div>
      <S.ContentsFilterButton
        onClick={() => onStatusChange('All files')}
        className={status === 'All files' ? 'active' : ''}
      >
        All files
      </S.ContentsFilterButton>
      <S.ContentsFilterButton onClick={() => onStatusChange('Teams')} className={status === 'Teams' ? 'active' : ''}>
        Teams
      </S.ContentsFilterButton>
      <S.ContentsFilterButton
        onClick={() => onStatusChange('Personal')}
        className={status === 'Personal' ? 'active' : ''}
      >
        Personal
      </S.ContentsFilterButton>
    </div>
  );
};

export default RetroListContentsFilter;
