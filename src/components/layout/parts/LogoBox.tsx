import Logo from '@/../public/logo.svg';
import * as S from '@/styles/layout/layout.style';
const LogoBox = () => {
  return (
    <>
      <S.LogoText color="brand" href="/#">
        <img src={Logo} />
        Past Forward
      </S.LogoText>
    </>
  );
};

export default LogoBox;
