import * as S from '@/styles/writeRetroStyles/Label.style';

const TaskCount = '8';

type LabelProps = {
  title: string;
  background_color: string;
  color: string;
  mark_background_color: string;
};

function Label({ title, background_color, color, mark_background_color }: LabelProps) {
  return (
    <>
      <S.LabelStyle background_color={background_color}>
        <S.LabelMarkStyle mark_background_color={mark_background_color}></S.LabelMarkStyle>
        <S.LabelTextStyle color={color}>{title}</S.LabelTextStyle>
        <S.TaskCountStyle>
          <S.TaskCountTextStyle>{TaskCount}</S.TaskCountTextStyle>
        </S.TaskCountStyle>
      </S.LabelStyle>
    </>
  );
}

export default Label;
