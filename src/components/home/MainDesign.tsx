import { useNavigate } from 'react-router-dom';
import logo from '@/../public/MainPageLogo.svg';
import * as S from '@/styles/Home/home.style';
import * as L from '@/styles/layout/layout.style';

const MainDesign = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate('/create');
  };

  return (
    <div style={{ paddingTop: '130px' }}>
      <div style={{ height: '100vh' }}>
        <S.TopTriangleContainer>
          <S.TopText>
            개인회고와 팀 회고 템플릿을 동시에 제공하는 회고 웹페이지입니다. <br />
            우리는 개인과 팀이 모두 발전할 수 있도록, <br />
            과거의 경험을 효과적으로 되새기고 배우는 것을 지원합니다.
          </S.TopText>
          <S.BottomText>
            과거를 회고하며 미래로 나아가는 과정을
            <br /> 촉진하는 의미를 가진 이름으로 <br />
            &apos; Past&apos; (과거)와 &apos;Forward &apos;(앞으로 나아가다)를 결합하여 비전을 표현합니다.
          </S.BottomText>
        </S.TopTriangleContainer>
        <S.BrandContainer>
          <img src={logo} style={{ paddingLeft: '80px', width: '300px' }} />
          <S.BrandTextBox>
            <S.BrandSmallText style={{ paddingLeft: '20%' }}>Moving</S.BrandSmallText>
            <L.LogoText color="white" style={{ fontSize: '70px' }}>
              Forward
            </L.LogoText>
          </S.BrandTextBox>
          <S.BrandTextBox>
            <S.BrandSmallText style={{ paddingLeft: '45%' }}>From the</S.BrandSmallText>
            <L.LogoText color="white" style={{ fontSize: '70px' }}>
              Past
            </L.LogoText>
          </S.BrandTextBox>
          <S.StartedFreeButton onClick={navigateToCreate} id="home_startpf">
            Get Started for Free
          </S.StartedFreeButton>
        </S.BrandContainer>
      </div>
    </div>
  );
};

export default MainDesign;
