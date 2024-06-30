import Background from '@/assets/overview1.png';
import * as S from '@/styles/Main/Template2.styles';

const Template2: React.FC = () => {
  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>회고를 통한 프로젝트 성장</S.Title>
      </S.TitleBox>
      <S.Line></S.Line>
      <S.SubtitleBox>
        <S.SubTitle>템플릿에 맞춰서 쉽게 회고를 시작하고 빠르게 프로젝트를 성장시키세요</S.SubTitle>
      </S.SubtitleBox>
      <S.Img src={Background} />
    </S.Container>
  );
};

export default Template2;
