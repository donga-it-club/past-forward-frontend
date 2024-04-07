import * as S from '@/styles/writeRetroStyles/Layout.style';

type LabelProps = {
  labelName: string;
  labelType: 'dark' | 'light';
  taskCount: number;
};
const Label = ({ labelName, labelType, taskCount }: LabelProps) => {
  let labelColor, markColor, fontColor;

  if (labelType === 'dark') {
    labelColor = '#111B47';
    markColor = '#FFFFFF';
    fontColor = '#FFFFFF';
  } else {
    labelColor = '#FFFFFF';
    markColor = '#CECECE';
    fontColor = '#1A265C';
  }

  return (
    <>
      <S.LabelStyle color={labelColor}>
        <S.LabelMark mark_color={markColor}></S.LabelMark>
        <S.LabelName font_color={fontColor}>{labelName}</S.LabelName>
        <S.TaskCount>{taskCount}</S.TaskCount>
      </S.LabelStyle>
    </>
  );
};

export default Label;
