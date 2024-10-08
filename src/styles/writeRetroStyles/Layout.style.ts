import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  @media (max-width: 800px) {
    position: relative;
    margin: 0 auto;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const RetroTitleBox = styled.div`
  display: flex;
  /* @media (max-width: 800px) {
    display: block;
  } */
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const TitleStyleBox = styled.div`
  display: flex;
  /* @media (max-width: 800px) {
    display: block;
  } */
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const TitleText = styled.p`
  width: auto;
  max-width: calc(100vw - 300px);
  max-width: 1200px;
  height: auto;
  font-size: 30px;
  font-weight: 700;
  color: #434343;
  line-height: 38px;
  margin-top: 3px;
  margin-left: 13px;
  margin-bottom: 10px;
  word-break: keep-all;
  @media (max-width: 800px) {
    /* width: 55vw; */
    /* margin-left: 0px; */
    width: 85vw;
  }
  @media (max-width: 1000px) {
    margin-left: 0px;
  }
`;

export const SubTitleText = styled.p`
  width: calc(100vw - 400px);
  height: auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  color: #8d8d8d;
  margin-left: 55px;
  margin-bottom: 15px;
  word-break: keep-all;
  @media (max-width: 800px) {
    width: 85vw;
  }
  @media (max-width: 1000px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;

export const ExplainBox = styled.div`
  width: calc(100vw - 350px);
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    width: 85vw;
    margin-bottom: 10px;
  }
`;

export const SaveSettingBox = styled.div`
  display: flex;
`;

export const SaveButton = styled.div`
  width: 107px;
  height: 31px;
  font-size: 15px;
  font-weight: 500;
  color: #979797;
  line-height: 30px;
  text-align: center;
  background-color: #ebeef2;
  border: 0.2px solid rgba(17, 27, 71, 1);
  border-radius: 5px;
  margin: auto 0;
  &:hover {
    cursor: pointer;
  }
`;

export const SettingButton = styled.div`
  margin: auto 0;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;

// interface SectionBoxProps {
//   column: number;
// }

// export const SectionBox = styled.div<SectionBoxProps>`
export const SectionBox = styled.div`
  /* width: 100vw; */
  /* width: 100vw; */
  display: grid;
  /* grid-template-columns: repeat(column, 1fr); */
  grid-auto-flow: column;
  gap: 10px;
  margin-top: 10px;
  @media (max-width: 800px) {
    display: block;
    margin: 10px auto;
    padding: 0px 10px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    /* grid-template-columns: repeat(Math.ceil(calc(column/2)), 1fr); */
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const FrameStyle = styled.div`
  width: 345px;
  /* min-width: 300px; */
  /* width: 100%; */
  height: auto;
  min-height: 100vh;
  background-color: #f8f8f8;
  box-shadow:
    -0.3px 0 0 0.3px #4d5e80,
    0 0.3px 0 0.3px #4d5e80,
    0 -0.3px 0 0.3px #4d5e80;
  border-radius: 10px 10px 0px 0px;
  padding: 15px;
  padding-bottom: 80px;
  @media (max-width: 800px) {
    width: 90%;
    /* box-shadow:
    0.3px 0 0 0.3px #4d5e80,
    0 0.3px 0 0.3px #4d5e80,
    0 -0.3px 0 0.3px #4d5e80;
    border-radius: 10px;
    margin: 0 auto 35px; */
  }
  @media (max-width: 1200px) {
    width: 100%;
    box-shadow:
      0.3px 0 0 0.3px #4d5e80,
      0 0.3px 0 0.3px #4d5e80,
      0 -0.3px 0 0.3px #4d5e80;
    border-radius: 10px;
    margin: 0px auto 35px;
  }
`;

export const LabelStyle = styled.div<{ color: string }>`
  height: 60px;
  background-color: ${props => props.color};
  box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
  border-radius: 5px;
  display: flex;
  position: relative;
`;

export const LabelMark = styled.div<{ mark_color: string }>`
  width: 3px;
  height: 30px;
  background-color: ${props => props.mark_color};
  border-radius: 5px;
  margin: auto 0;
  margin-left: 13px;
`;

export const LabelName = styled.p<{ font_color: string }>`
  height: 20px;
  font-size: 18px;
  font-weight: 900;
  color: ${props => props.font_color};
  line-height: 20px;
  margin: auto 0;
  margin-left: 10px;
`;

export const TaskCount = styled.div`
  min-width: 22px;
  height: 24px;
  font-size: 10px;
  font-weight: 800;
  color: #111b47;
  text-align: center;
  background-color: #e4e4e4;
  border-radius: 16px;
  padding: 5px 8.5px;
  position: absolute;
  top: 18px;
  left: 80%;
`;

export const TaskBox = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  min-height: 115px;
  min-width: 250px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  margin: 0 3px;
  margin-top: 25px;
`;

export const TaskMainStyle = styled.div`
  padding: 10px;
`;

export const TaskUserProfile = styled.div`
  display: flex;
  margin: auto 0;
  flex: 2;
`;

export const TaskUserName = styled.p`
  height: 20px;
  font-size: 15px;
  font-weight: 700;
  color: #adb8cc;
  line-height: 20px;
  margin: auto 8px;
`;

export const TaskRevise = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: red;
  margin: auto 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const reviseTitleText = styled.p`
  font-size: 20px;
  max-width: 500px;
  font-weight: 700;
  color: #6b7a99;
  line-height: 20px;
  vertical-align: top;
  display: inline-block;

  margin: 'auto 0';
`;

export const TaskText = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #6b7a99;
  line-height: 20px;
  vertical-align: top;
  margin: 20px 0;
  margin-right: 10px;
  margin-top: 20px;
`;

export const ReviseText = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #adb8cc;
  line-height: 10px;
  margin-left: 3px;
  display: inline;
`;

export const SubTaskBox = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  margin-top: 12px;
`;

export const SubTaskStyle = styled.div`
  margin: auto 0;
  display: flex;
  margin-right: 2px;
`;

export const SubTaskIcon = styled.div`
  margin: auto 3px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubTaskCount = styled.p`
  margin: auto 5px;
  font-size: 12px;
  font-weight: 700;
  color: #6b7a99;
  line-height: 20px;
`;

export const TaskMessageBoxStyle = styled.div`
  min-height: 50px;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 10px;
`;

export const TaskMessageCount = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #dadee5;
  padding: 0 auto;
`;

export const TaskMessageLine = styled.div`
  width: 60%;
  margin: auto 10px;
  border-bottom: 1px solid #dadee5;
  @media (max-width: 800px) {
    width: 83%;
  }
`;

export const TaskMessageStyle = styled.div`
  min-height: 10px;
  margin-top: 10px;
`;

export const MessageUserProfile = styled.div``;

export const MessageTopStyle = styled.div``;

export const MessageUserName = styled.p`
  font-size: 15px;
  margin: auto 5px;
  font-weight: 700;
  color: #adb8cc;
`;

export const MessageTime = styled.p`
  margin: auto 5px;
  font-size: 15px;
  font-weight: 700;
  color: #dadee5;
  margin-left: 5px;
  position: relative;
`;

export const MessageText = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #6b7a99;
  vertical-align: top;
  display: inline-block;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;

export const ReviseMessageText = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #adb8cc;
  line-height: 10px;
  margin-left: 3px;
  display: inline;
`;

export const InputMessage = styled.textarea.attrs(props => ({
  placeholder: props.placeholder,
}))`
  font-size: 15px;
  font-weight: 500;
  padding: 2px 3px;
  padding-top: 5px;
  text-justify: center;
  color: #425170;
  width: 100%;
  line-height: 20px;
  background-color: #f3f3f3;
  border: 0.7px solid rgba(175, 175, 175, 1);
  border-radius: 7px;
  resize: none;
  overflow-y: hidden;
  ::placeholder {
    color: #9ca6ba;
  }
`;

export const InputButton = styled.button`
  font-size: 15px;
  padding: 5px 10px;
  width: 100px;
  margin-left: 10px;
  font-weight: 700;
  color: #ffffff;
  background-color: #111b47;
  border-radius: 10px;
`;

// AddTaskButtonStyle
export const AddTaskButtonStyle = styled.div`
  height: auto;
  min-height: 39px;
  background-color: #ffffff;
  border: 1px solid rgba(242, 244, 247, 1);
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(96, 108, 128, 0.05);
  margin-top: 30px;
  position: relative;
`;

export const AddTaskButtonBox = styled.div`
  height: 39px;
  border-radius: 8px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const AddTaskButtonImage = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputTaskBox = styled.div`
  border-top: 1px solid rgba(218, 222, 229, 1);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 12px 0px 8px;
  margin: 0 auto;
`;

export const InputTask = styled.textarea.attrs(props => ({
  placeholder: props.placeholder,
}))`
  width: 90%;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #425170;
  background-color: #f3f3f3;
  border: 0.7px solid rgba(175, 175, 175, 1);
  border-radius: 6px;
  display: block;
  padding: 5px 7px;
  margin: 0 auto;
  resize: none;
  overflow-y: hidden;
  ::placeholder {
    color: #9ca6ba;
  }
`;

export const ActionTaskText = styled(TaskText)`
  width: 220px;
`;

export const ManagerStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px;
  align-items: center;
`;

export const ManagerText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #adb8cc;
  line-height: 28px;
  margin: auto 5px;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ManagerButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: 10px;
  font-weight: 800;
  color: #4d5e80;
  line-height: 24px;
  text-align: center;
  background-color: #e4e4e4;
  border-radius: 16px;
  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

export const ReviseModalStyle = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 10px;
`;

export const ReviseModalLine = styled.div`
  width: 85%;
  box-shadow: 0px -1px 0px rgba(181, 181, 181, 0.7) inset;
`;

export const ReviseModalTitle = styled.div`
  width: 62px;
  height: 38px;
  font-size: 15px;
  font-weight: 500;
  color: #111b47;
  line-height: 30px;
  text-align: center;
  border-bottom: 3px solid #111b47;
`;

export const ReviseModalInput = styled.textarea.attrs(props => ({
  defaultValue: props.defaultValue,
}))`
  width: 85%;
  min-height: 87px;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: #425170;
  background-color: #f3f3f3;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  display: block;
  padding: 10px;
  margin: 0 10px;
  margin-top: 26px;
  resize: none;
  overflow-y: hidden;
  ::placeholder {
    color: #9ca6ba;
  }
`;

export const ReviseModalButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
`;

export const ReviseModalButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  color: #888888;
  padding: 5px 20px;
  line-height: 30px;
  text-align: center;
  background-color: #f1f1f1;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  margin-right: 30px;
`;

export const HoverUser = styled.span`
  position: absolute;
  width: 40px;
  left: -5px; /* 원하는 만큼의 왼쪽 이동 값 설정 */
  top: 100%;
`;

export const ActionItemsUserImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const DeleteSectionText = styled.p`
  margin: 20px;
  color: #111b47;
  font-size: 15px;
`;

export const ActionItemsUserContainer = styled.div`
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  background-color: #f8f8f8;
  padding: 4px;
  width: 90px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;
