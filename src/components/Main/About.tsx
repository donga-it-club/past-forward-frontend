import AboutUs from '@/assets/AboutUs.png';
import * as S from '@/styles/Main/About.styles';

const About: React.FC = () => {
  return (
    <S.Container>
      <S.Img src={AboutUs} />
    </S.Container>
  );
};

export default About;
