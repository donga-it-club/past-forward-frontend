import * as S from '../../styles/writeRetroStyles/Frame.style';
import Label from './Label';
import Task from './Task';
import AddTaskButton from './AddTaskButton';

type FrameProps = {
  title: string;
  background_color: string;
  color: string;
  mark_background_color: string;
  left: string;
  button_color: 'dark' | 'light';
};

function Frame({ title, background_color, color, mark_background_color, left, button_color }: FrameProps) {
  return (
    <>
      <S.FrameStyle left={left}>
        <Label
          title={title}
          background_color={background_color}
          color={color}
          mark_background_color={mark_background_color}
        ></Label>
        <S.TaskFrame>
          <S.TaskBox>
            <Task></Task>
            <Task></Task>
            <Task></Task>
          </S.TaskBox>
          <AddTaskButton color={button_color}></AddTaskButton>
        </S.TaskFrame>
      </S.FrameStyle>
    </>
  );
}

export default Frame;
