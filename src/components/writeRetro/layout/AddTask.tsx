import { ChangeEvent, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import * as S from '@/styles/writeRetroStyles/Layout.style';

type AddTaskProps = {
  color: 'dark' | 'light';
};

export const AddTask = ({ color }: AddTaskProps) => {
  const buttonColor = color === 'dark' ? '#111B47' : '#DADEE5';
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(isVisible => !isVisible);
  };
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      {/* AddTaskButton */}
      <S.AddTaskButtonStyle>
        <S.AddTaskButtonBox onClick={handleClick}>
          <S.AddTaskButtonImage>
            <AiFillPlusCircle size={'21px'} color={buttonColor} />
          </S.AddTaskButtonImage>
        </S.AddTaskButtonBox>
        {/* AddTaskInput */}
        {isVisible && (
          <S.InputTaskBox>
            <S.InputTask value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1}></S.InputTask>
            <S.InputButton style={{ marginTop: '10px', marginLeft: '70%' }}>확인</S.InputButton>
          </S.InputTaskBox>
        )}
      </S.AddTaskButtonStyle>
    </>
  );
};
