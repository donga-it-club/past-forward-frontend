import { useEffect, useRef } from 'react';
import * as S from '@/styles/RetroListHaveSth/RetroListContentsFilter.style';

type RetroListContentsFilterProps = {
  status: string;
  onStatusChange: (newStatus: string) => void;
};

const RetroListContentsFilter: React.FC<RetroListContentsFilterProps> = ({ status, onStatusChange }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);

  return (
    <div ref={ref}>
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
