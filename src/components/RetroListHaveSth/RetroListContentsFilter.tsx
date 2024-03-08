import React, { useState } from 'react';
import styled from 'styled-components';

const ContentsFilterButton = styled.button`
  border: none;
  background: white;
  color: #949494;
  padding: 5px 15px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  &:focus {
    color: #111b47;
    border-bottom: 4px solid #111b47;
  }
`;

const RetroListContentsFilter: React.FC = () => {
  const [selectContents, setSelectContents] = useState<string>('all');

  const handleFilterChange = (filter: string) => {
    setSelectContents(filter);
  };

  return (
    <div className="filter">
      <ContentsFilterButton onClick={() => handleFilterChange('all')}>All files</ContentsFilterButton>
      <ContentsFilterButton onClick={() => handleFilterChange('teams')}>Teams</ContentsFilterButton>
      <ContentsFilterButton onClick={() => handleFilterChange('personal')}>Personal</ContentsFilterButton>
      {selectContents === 'all' && <div>All files</div>}
      {selectContents === 'teams' && <div>Teams</div>}
      {selectContents === 'personal' && <div>Personal</div>}
    </div>
  );
};

export default RetroListContentsFilter;
