import { useState } from 'react';
import * as S from '@/styles/projectRetro/StatusFilter.styles';

interface StatusFilterProps {
  onSelectedFilter: (filter: 'ALL' | 'ING' | 'DONE') => void;
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
          onSelectedFilter('ING');
          setActiveFilter('ING');
        }}
        className={activeFilter === 'ING' ? 'active' : ''}
      >
        ING
      </S.Button>
      <S.Button
        onClick={() => {
          onSelectedFilter('DONE');
          setActiveFilter('DONE');
        }}
        className={activeFilter === 'DONE' ? 'active' : ''}
      >
        DONE
      </S.Button>
    </S.Container>
  );
};

export default StatusFilter;
