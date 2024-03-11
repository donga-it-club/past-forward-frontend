import React, { useState } from 'react';
import * as S from '../../styles/RetroListHaveSth/RetroListContentsFilter.style';

const RetroListContentsFilter: React.FC = () => {
  const [selectContents, setSelectContents] = useState<string>('all');

  const handleFilterChange = (filter: string) => {
    setSelectContents(filter);
  };

  return (
    <div className="filter">
      <S.ContentsFilterButton onClick={() => handleFilterChange('all')}>All files</S.ContentsFilterButton>
      <S.ContentsFilterButton onClick={() => handleFilterChange('teams')}>Teams</S.ContentsFilterButton>
      <S.ContentsFilterButton onClick={() => handleFilterChange('personal')}>Personal</S.ContentsFilterButton>
      {selectContents === 'all' && <div>All files</div>}
      {selectContents === 'teams' && <div>Teams</div>}
      {selectContents === 'personal' && <div>Personal</div>}
    </div>
  );
};

export default RetroListContentsFilter;
