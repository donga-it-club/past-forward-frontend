import React from 'react';
import styled from 'styled-components';
import UploadPhoto from './UploadPhoto';
import TemlplateSelect from './TemplateSelect';
import StartDateCalendar from './StartDateCalender';

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.div`
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  width: 50rem;
  height: 25rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  font-weight: lighter;
  color: rgba(139, 139, 139, 1);
  cursor: pointer;
`;

interface CreateModalProps {
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ onClose }) => {
  return (
    <ModalBackground>
      <ModalView>
        <CloseButton onClick={onClose}>×</CloseButton>
        <UploadPhoto />
        <div>Retrospect Name</div>
        <TemlplateSelect />
        <StartDateCalendar />
      </ModalView>
    </ModalBackground>
  );
};

export default CreateModal;
