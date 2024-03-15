import React, { useState } from 'react';
import CreateButtonBox from '@/components/createRetro/CreateButtonBox';
import CreateModal from '@/components/createRetro/CreateModal';
import DescriptionBox from '@/components/createRetro/DescriptionBox';

const TemplateNothingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateButtonClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      {modalOpen && <CreateModal onClose={() => setModalOpen(false)} />}
      <CreateButtonBox onClick={handleCreateButtonClick} />
      <DescriptionBox />
    </>
  );
};

export default TemplateNothingPage;
