import { FC, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { SectionServices } from '@/api/services/Section';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  retrospectiveId: number | undefined;
  template: number;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTask: FC<Props> = ({ retrospectiveId, template, setRendering }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toast = useCustomToast();
  const [content, setContent] = useState<string>('');

  const handleClick = () => {
    setIsVisible(isVisible => !isVisible);
  };

  const handleAddSection = async () => {
    try {
      if (retrospectiveId) {
        await SectionServices.create({
          retrospectiveId: retrospectiveId,
          templateSectionId: template.valueOf(),
          sectionContent: content,
        });
      }
      toast.success('회고 카드가 추가되었습니다.');
      setRendering(prev => !prev);
      setContent('');
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <>
      {/* AddTaskButton */}
      <S.AddTaskButtonStyle>
        <S.AddTaskButtonBox onClick={handleClick} id="wr_add">
          <S.AddTaskButtonImage>
            <AiFillPlusCircle size={'21px'} />
          </S.AddTaskButtonImage>
        </S.AddTaskButtonBox>

        {/* AddTaskInput */}
        {isVisible && (
          <S.InputTaskBox>
            <S.InputTask
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
              placeholder="내용을 입력해주세요"
              rows={1}
            ></S.InputTask>
            <S.InputButton style={{ marginTop: '10px', marginLeft: '60%' }} onClick={handleAddSection}>
              확인
            </S.InputButton>
          </S.InputTaskBox>
        )}
      </S.AddTaskButtonStyle>
    </>
  );
};
