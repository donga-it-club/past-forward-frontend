import React from 'react';
import * as S from '../../styles/createRetro/CreateModal.style';
import UploadPhoto from './UploadPhoto';
import TemlplateSelect from './TemplateSelect';
import StartDateCalendar from './StartDateCalender';

interface CreateModalProps {
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ onClose }) => {
  return (
    <S.ModalBackground>
      <S.ModalView>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <UploadPhoto />
        <div>Retrospect Name</div>
        <TemlplateSelect />
        <StartDateCalendar />
      </S.ModalView>
    </S.ModalBackground>
  );
};

export default CreateModal;
