import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import { PersonalTask } from '@/components/writeRetro/task/Task';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const WriteRetroPersonalPage = () => {
  return (
    <>
      <Title />
      <S.SectionBox>
        <S.FrameStyle>
          <Label labelName="Keep" labelType="dark" taskCount={3}></Label>
          <PersonalTask />
          <PersonalTask />
          <PersonalTask />
          <AddTask color="dark"></AddTask>
          <AddTask color="light"></AddTask>
        </S.FrameStyle>
        <S.FrameStyle>
          <Label labelName="Problem" labelType="light" taskCount={3}></Label>
          <PersonalTask />
          <AddTask color="light"></AddTask>
        </S.FrameStyle>
        <S.FrameStyle>
          <Label labelName="Try" labelType="dark" taskCount={3}></Label>
          <PersonalTask />
          <AddTask color="dark"></AddTask>
        </S.FrameStyle>
        <S.FrameStyle>
          <Label labelName="Action Items" labelType="light" taskCount={3}></Label>
          <PersonalTask />
          <AddTask color="light"></AddTask>
        </S.FrameStyle>
      </S.SectionBox>
    </>
  );
};
