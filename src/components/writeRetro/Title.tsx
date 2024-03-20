import image from '../../assets/-group_senior.png';
import * as S from '../../styles/writeRetroStyles/WriteRetroTitle.style';

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <>
      <S.TitleStyle>
        <S.TitleImageStyle>
          <img src={image}></img>
        </S.TitleImageStyle>
        <S.TitleTextStyle>{title}</S.TitleTextStyle>
      </S.TitleStyle>
    </>
  );
}

export default Title;
