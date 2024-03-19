import * as S from '../../styles/writeRetroStyles/AddTaskButton.style';
import dark from '../../assets/PlusIcon_black.png';
import light from '../../assets/PlusIcon_gray.png';

type AddTaskButtonProps = {
  color: 'dark' | 'light';
};

function AddTaskButton({ color }: AddTaskButtonProps) {
  const image = color === 'dark' ? dark : light;

  return (
    <>
      <S.AddTaskButtonStyle>
        <S.AddTaskButtonImage>
          <img src={image} alt="Add Task"></img>
        </S.AddTaskButtonImage>
      </S.AddTaskButtonStyle>
    </>
  );
}

export default AddTaskButton;
