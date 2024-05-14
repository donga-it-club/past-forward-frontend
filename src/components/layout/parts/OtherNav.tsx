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
      <S.OrdinaryButton onClick={() => navigate('retrolist')} style={{ backgroundColor: '#37447E' }}>
        Retrospect List
      </S.OrdinaryButton>
    </S.LeftBox>
  );
};

export default OtherNav;
