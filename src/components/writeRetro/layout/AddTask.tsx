import { FC, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { PostSectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  retrospectiveId: number | undefined;
  template: number;
}

export const AddTask: FC<Props> = ({ retrospectiveId, template }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState<PostSectionData>();
  const toast = useCustomToast();
  const [content, setContent] = useState<string>('');

  const handleClick = () => {
    setIsVisible(isVisible => !isVisible);
  };

  const handleAddSection = async () => {
    try {
      if (retrospectiveId) {
        const data = await SectionServices.create({
          retrospectiveId: retrospectiveId,
          templateSectionId: template.valueOf(),
          sectionContent: content,
        });
        setResult(data.data);
        console.log(result);
      }
    } catch (e) {
      toast.error(e);
    }
  };

  // const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setValue(e.target.value);
  //   e.target.style.height = 'auto';
  //   e.target.style.height = `${e.target.scrollHeight}px`;
  // };

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
            <S.InputTask
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
              rows={1}
            ></S.InputTask>
            <S.InputButton style={{ marginTop: '10px', marginLeft: '55%' }} onClick={handleAddSection}>
              확인
            </S.InputButton>
          </S.InputTaskBox>
        )}
      </S.AddTaskButtonStyle>
    </>
  );
};
