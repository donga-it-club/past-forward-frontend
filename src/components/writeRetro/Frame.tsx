import * as S from '../../styles/writeRetroStyles/Frame.style';
import Label from './Label';

type FrameProps = {
  title: string;
  background_color: string;
  color: string;
  mark_background_color: string;
  left: string;
};

function Frame({ title, background_color, color, mark_background_color, left }: FrameProps) {
  return (
    <>
      <S.FrameStyle left={left}>
        <Label
          title={title}
          background_color={background_color}
          color={color}
          mark_background_color={mark_background_color}
        ></Label>
      </S.FrameStyle>
    </>
  );
}

export default Frame;
