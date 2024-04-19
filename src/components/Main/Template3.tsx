import Background from '@/assets/Template3.png';
import * as S from '@/styles/Main/Template3.styles';

const Template3: React.FC = () => {
  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>명확한 분류로 정렬된 회고보드 확인</S.Title>
      </S.TitleBox>
      <S.Line></S.Line>
      <S.SubtitleBox>
        <S.SubTitle>원하는 정렬로 회고 페이지를 쉽고 명확하게 탐색하세요</S.SubTitle>
      </S.SubtitleBox>
      <S.Img src={Background} />
    </S.Container>
  );
};

export default Template3;
