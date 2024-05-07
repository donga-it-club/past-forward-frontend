import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/layout/layout.style';

const OtherNav = () => {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/create');
  };
  return (
    <S.LeftBox>
      <S.OrdinaryButton onClick={navigateToCreate} id="header_create">
        Create
      </S.OrdinaryButton>
      <S.Link href="/#Home" id="header_home">
        How to use Retrospective Templates?
      </S.Link>
    </S.LeftBox>
  );
};

export default OtherNav;
