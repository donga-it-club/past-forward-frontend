import React, { useState } from 'react';
import CreateButtonBox from '@/components/createRetro/CreateButtonBox';
import CreateModal from '@/components/createRetro/CreateModal';

const TemplateNothingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateButtonClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      {modalOpen && <CreateModal onClose={() => setModalOpen(false)} />}

      <CreateButtonBox onClick={handleCreateButtonClick} />
    </>
  );
};

export default TemplateNothingPage;
