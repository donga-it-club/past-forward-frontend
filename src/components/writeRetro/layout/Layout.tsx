import { useState, ChangeEvent } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoIosMore } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { PersonalTask, TeamActionItemsTask, TeamTask } from '@/components/writeRetro/task/Task';
import * as S from '@/styles/writeRetroStyles/Layout.style';

type LabelProps = {
  labelName: string;
  labelType: 'dark' | 'light';
  taskCount: number;
};

type AddTaskProps = {
  color: 'dark' | 'light';
};

export const Title = () => {
  const title: string = 'FirstRetro';
  const subTitle: string = '첫 회고 진행 - 앞으로 남은 회고는 2번!';

  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex' }}>
          <MdPeopleAlt size="60px" color="#434343" />
          <S.TitleText>{title}</S.TitleText>
        </div>
        <S.SubTitleText>{subTitle}</S.SubTitleText>
      </S.TitleBox>
    </>
  );
};

export const SaveSetting = () => {
  return (
    <S.SaveSettingBox>
      <S.SaveButton>SAVE</S.SaveButton>
      <S.SettingButton>
        <IoIosMore size={'40px'} color="#B1B2B2" />
      </S.SettingButton>
    </S.SaveSettingBox>
  );
};

export const Label = ({ labelName, labelType, taskCount }: LabelProps) => {
  let labelColor, markColor, fontColor;

  if (labelType === 'dark') {
    labelColor = '#111B47';
    markColor = '#FFFFFF';
    fontColor = '#FFFFFF';
  } else {
    labelColor = '#FFFFFF';
    markColor = '#CECECE';
    fontColor = '#1A265C';
  }

  return (
    <>
      <S.LabelStyle color={labelColor}>
        <S.LabelMark mark_color={markColor}></S.LabelMark>
        <S.LabelName font_color={fontColor}>{labelName}</S.LabelName>
        <S.TaskCount>{taskCount}</S.TaskCount>
      </S.LabelStyle>
    </>
  );
};

export const AddTask = ({ color }: AddTaskProps) => {
  const buttonColor = color === 'dark' ? '#111B47' : '#DADEE5';
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(isVisible => !isVisible);
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
        {isVisible && <AddTaskInput />}
      </S.AddTaskButtonStyle>
    </>
  );
};

export const AddTaskInput = () => {
  // Input 높이 자동 조절
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      <S.InputTaskBox>
        <S.InputTask value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1}></S.InputTask>
        <S.InputButton style={{ marginTop: '10px', marginLeft: '256px' }}>확인</S.InputButton>
      </S.InputTaskBox>
    </>
  );
};

export const Kudos = () => {
  const labelName = 'Kudos';
  const labelType = 'dark';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <TeamTask />
        <TeamTask />
        <TeamTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const WentWell = () => {
  const labelName = 'Went Well';
  const labelType = 'light';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <TeamTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const ToImprove = () => {
  const labelName = 'To Improve';
  const labelType = 'dark';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <TeamTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const ActionItems = () => {
  const labelName = 'Action Items';
  const labelType = 'light';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <TeamActionItemsTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const Keep = () => {
  const labelName = 'Keep';
  const labelType = 'dark';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <PersonalTask />
        <PersonalTask />
        <PersonalTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const Problem = () => {
  const labelName = 'Problem';
  const labelType = 'light';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <PersonalTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const Try = () => {
  const labelName = 'Try';
  const labelType = 'dark';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <PersonalTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};

export const PersonalActionItems = () => {
  const labelName = 'Action Items';
  const labelType = 'light';
  const taskCount = 3;

  return (
    <>
      <S.FrameStyle>
        <Label labelName={labelName} labelType={labelType} taskCount={taskCount}></Label>
        <PersonalTask />
        <AddTask color={labelType}></AddTask>
      </S.FrameStyle>
    </>
  );
};
