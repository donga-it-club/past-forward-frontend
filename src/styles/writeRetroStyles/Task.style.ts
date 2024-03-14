import styled from 'styled-components';

export const TaskStyle = styled.div<{ left: string }>`
  width: 311px;
  height: 115px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.3);
  position: absolute;
  top: 361px;
  left: ${props => props.left};
`;

export const TaskUserNameStyle = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #adb8cc;
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const TaskTitleStyle = styled.span`
  width: 261px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  color: #6b7a99;
  position: absolute;
  top: 40px;
  left: 15px;
`;

export const TaskUserProfile = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  left: 276px;
`;

export const ThumbUpIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 73px;
  left: 15px;
`;

export const MessageIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 76px;
  left: 67px;
`;

export const DaysLeftIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 71px;
  left: 114px;
  /* border: 1px solid red; */
`;

export const TaskSubCount = styled.p<{ left: string }>`
  width: auto;
  height: 20px;
  font-size: 10px;
  font-weight: 700;
  color: #6b7a99;
  position: absolute;
  top: 82px;
  left: ${props => props.left};
`;
