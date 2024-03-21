import * as S from '../../styles/writeRetroStyles/Title.style';
import image from '../../assets/-group_senior.png';

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
