import Logo from '@/../public/logo.png';
import * as S from '@/styles/layout/layout.style';
const LogoBox = () => {
  return (
    <S.LogoBox>
      <S.LogoText href="/#">
        <img src={Logo} />
        Past Forward
      </S.LogoText>
    </S.LogoBox>
  );
};

export default LogoBox;
