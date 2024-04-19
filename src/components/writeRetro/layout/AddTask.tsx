import { ChangeEvent, FC, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import * as S from '@/styles/writeRetroStyles/Layout.style';

// interface Props {
//   retro: RetrospectiveData;
//   template: TemplateNameData[];
// }

export const AddTask: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => {
    setIsVisible(isVisible => !isVisible);
  };

  // const handleAddSection = async () => {
  //   try{
  //     const data = await SectionServices.create({  retrospectiveId: retro.retrospectiveId,
  //       templateSectionId: template;
  //       sectionContent: string;
  //     }})
  //   }
  // }

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
            <AiFillPlusCircle size={'21px'} />
          </S.AddTaskButtonImage>
        </S.AddTaskButtonBox>
        {/* AddTaskInput */}
        {isVisible && (
          <S.InputTaskBox>
            <S.InputTask value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1}></S.InputTask>
            <S.InputButton style={{ marginTop: '10px', marginLeft: '55%' }}>확인</S.InputButton>
          </S.InputTaskBox>
        )}
      </S.AddTaskButtonStyle>
    </>
  );
};
