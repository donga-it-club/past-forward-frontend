import * as S from '@/styles/writeRetroStyles/Subtitle.style';

type SubTitleProps = {
  subTitle: string;
};

function SubTitle({ subTitle }: SubTitleProps) {
  return (
    <>
      <S.SubTitleStyle>{subTitle}</S.SubTitleStyle>
    </>
  );
}

export default SubTitle;
