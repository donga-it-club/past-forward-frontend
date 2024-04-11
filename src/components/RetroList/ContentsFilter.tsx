import { useState, useEffect, useRef } from 'react';
import * as S from '@/styles/RetroList/ContentsFilter.style';

type ContentsFilterProps = {
  onFilter: (filterType: string) => void;
};

const ContentsFilter: React.FC<ContentsFilterProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };

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
        onClick={() => {
          onFilter('ALL');
          setActiveFilter('ALL');
          handleActive();
        }}
        className={activeFilter === 'ALL' ? 'active' : ''}
      >
        ALL files
      </S.ContentsFilterButton>
      <S.ContentsFilterButton
        onClick={() => {
          onFilter('Teams');
          setActiveFilter('Teams');
          handleActive();
        }}
        className={activeFilter === 'Teams' ? 'active' : ''}
      >
        Teams
      </S.ContentsFilterButton>
      <S.ContentsFilterButton
        onClick={() => {
          onFilter('Personal');
          setActiveFilter('Personal');
          handleActive();
        }}
        className={activeFilter === 'Personal' ? 'active' : ''}
      >
        Personal
      </S.ContentsFilterButton>
    </div>
  );
};

export default ContentsFilter;
