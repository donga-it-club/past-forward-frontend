import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/writeRetroStyles/BackButton.styles';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.ButtonBox>
        <S.Button onClick={() => navigate(-1)}>
          <MdKeyboardDoubleArrowLeft size={14} />
          &nbsp; 회고 페이지로 돌아가기
        </S.Button>
      </S.ButtonBox>
    </>
  );
};

export default BackButton;
