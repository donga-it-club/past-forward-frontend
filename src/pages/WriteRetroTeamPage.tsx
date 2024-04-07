import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import { TeamActionItemsTask, TeamTask } from '@/components/writeRetro/task/Task';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const WriteRetroTeamPage = () => {
  return (
    <>
      <Title />
      <S.SectionBox>
        <S.FrameStyle>
          <Label labelName="Kudos" labelType="dark" taskCount={3}></Label>
          <TeamTask />
          <TeamTask />
          <TeamTask />
          <AddTask color="dark"></AddTask>
        </S.FrameStyle>
        <S.FrameStyle>
          <Label labelName="Went Well" labelType="light" taskCount={3}></Label>
          <TeamTask />
          <AddTask color="light"></AddTask>
        </S.FrameStyle>
        <S.FrameStyle>
          <Label labelName="To Improve" labelType="dark" taskCount={3}></Label>
          <TeamTask />
          <AddTask color="dark"></AddTask>
        </S.FrameStyle>
        <S.FrameStyle>
          <Label labelName="Action Items" labelType="light" taskCount={3}></Label>
          <TeamActionItemsTask />
          <AddTask color="light"></AddTask>
        </S.FrameStyle>
      </S.SectionBox>
    </>
  );
};
