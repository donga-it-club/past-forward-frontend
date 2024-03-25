import google from '@/../public/google.png';
import kakao from '@/../public/kakao.png';
import * as S from '@/styles/my/myPage.style';
const EmailBox = () => {
  return (
    <>
      <S.MainName>이메일 </S.MainName>
      <S.DivingLine />
      <S.LoginBox background_color="white">
        <a style={{ margin: 'auto 10px' }}>Clayton@gmail.com</a>
      </S.LoginBox>
      <S.LoginBox background_color="#FFEB00">
        <S.KakaoIcon src={kakao} />
        <a style={{ margin: 'auto 5px' }}>Clayton@gmail.com</a>
      </S.LoginBox>
      <S.LoginBox background_color="white">
        <S.KakaoIcon src={google} />
        <a style={{ margin: 'auto 5px' }}>Clayton@gmail.com</a>
      </S.LoginBox>
    </>
  );
};

export default EmailBox;
