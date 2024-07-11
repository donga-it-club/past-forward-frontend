import { IoMdClose } from 'react-icons/io';
import { RiFolder6Fill } from 'react-icons/ri';
import * as S from '@/styles/projectRetro/DescriptionModal.styles';

interface DescriptionModalProps {
  isClose: () => void;
}

const DescriptionModal: React.FC<DescriptionModalProps> = ({ isClose }) => {
  return (
    <S.Background>
      <S.Container>
        <S.Modal>
          <IoMdClose
            onClick={isClose}
            size={20}
            style={{ color: '#a9a9a9', marginLeft: 'auto', marginRight: '10px', marginTop: '10px', cursor: 'pointer' }}
          />
          <S.Title>
            <RiFolder6Fill size={20} style={{ color: 'white' }} />
            &nbsp; &nbsp; Project 기능 활용하기
          </S.Title>
          <br />
          <strong>200% 활용하기</strong>
          <br />
          <p>회고(Retrospective)는 하나의 프로젝트(Project) 내에서 여러 번에 걸쳐 진행하게 될 수도 있습니다.</p>
          <br />
          <p>
            그러한 경우에, 하나의 프로젝트에서 진행한 회고 페이지들을 하나의 보드에 모아서 확인할 수 있는 기능입니다.
          </p>
          <br />
          <strong>생성된 회고 페이지들을 프로젝트로 묶어서 한 눈에 확인하세요!</strong>
        </S.Modal>
      </S.Container>
    </S.Background>
  );
};

export default DescriptionModal;
