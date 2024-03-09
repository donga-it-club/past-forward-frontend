import * as S from '../../styles/writeRetroStyles/WriteRetroTitle.style';
import image from '../../assets/-group_senior.png';

type WriteRetroTitleProps = {
  title: string;
};

function WriteRetroTitle({ title }: WriteRetroTitleProps) {
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

export default WriteRetroTitle;
