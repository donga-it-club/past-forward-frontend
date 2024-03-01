import React from 'react';
import TeamRetroCreateButton from '../components/createButton/TeamRetroCreateButton';
import PersonalRetroCreateButton from '../components/createButton/PersonalRetroCreateButton';

const TemplateNothingPage: React.FC = () => {
  return (
    <>
      <div>네비게이션바 영역</div>
      <TeamRetroCreateButton />
      <PersonalRetroCreateButton />
    </>
  );
};

export default TemplateNothingPage;
