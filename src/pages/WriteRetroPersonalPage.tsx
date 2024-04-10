import { IoMdInformationCircle } from 'react-icons/io';
import { AddTask } from '@/components/writeRetro/layout/AddTask';
import Label from '@/components/writeRetro/layout/Label';
import Title from '@/components/writeRetro/layout/Title';
import PersonalTask from '@/components/writeRetro/task/PersonalTask';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const WriteRetroPersonalPage = () => {
  return (
    <>
      <Title />
      <S.SectionBox>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <IoMdInformationCircle size={25} style={{ margin: 'auto 5px' }} />
            <p style={{ fontSize: '20px', margin: '5px' }}>수정을 원한다면, 해당 텍스트를 선택하세요!</p>
          </div>
          <div style={{ display: 'flex' }}>
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
          </div>
        </div>
      </S.SectionBox>
    </>
  );
};

export default WriteRetroPersonalPage;
