import { IoMdInformationCircle } from 'react-icons/io';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import TeamTask from '@/components/writeRetro/task/TeamTask';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const WriteRetroTeamPage = () => {
  return (
    <S.Container>
      <Title />
      <S.SectionBox>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <IoMdInformationCircle size={25} style={{ margin: 'auto 0' }} />
            <p style={{ fontSize: '20px', margin: '5px' }}>회고 카드를 누르면 수정이 가능합니다!</p>
          </div>

          <div style={{ display: 'flex' }}>
            <S.FrameStyle>
              <Label labelName="Kudos" labelType="dark" taskCount={3} />

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
              <TeamTask />
              <AddTask color="light"></AddTask>
            </S.FrameStyle>
          </div>
        </div>
      </S.SectionBox>
    </S.Container>
  );
};

export default WriteRetroTeamPage;
