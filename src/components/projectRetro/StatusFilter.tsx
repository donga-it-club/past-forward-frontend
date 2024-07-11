import { useState } from 'react';
import * as S from '@/styles/projectRetro/StatusFilter.styles';

interface StatusFilterProps {
  onSelectedFilter: (filter: 'ALL' | 'IN_PROGRESS' | 'COMPLETED') => void;
}
const StatusFilter: React.FC<StatusFilterProps> = ({ onSelectedFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  return (
    <S.Container>
      <S.Button
        onClick={() => {
          onSelectedFilter('ALL');
          setActiveFilter('ALL');
        }}
        className={activeFilter === 'ALL' ? 'active' : ''}
      >
        ALL
      </S.Button>
      <S.Button
        onClick={() => {
          onSelectedFilter('IN_PROGRESS');
          setActiveFilter('IN_PROGRESS');
        }}
        className={activeFilter === 'IN_PROGRESS' ? 'active' : ''}
      >
        ING
      </S.Button>
      <S.Button
        onClick={() => {
          onSelectedFilter('COMPLETED');
          setActiveFilter('COMPLETED');
        }}
        className={activeFilter === 'COMPLETED' ? 'active' : ''}
      >
        DONE
      </S.Button>
    </S.Container>
  );
};

export default StatusFilter;
