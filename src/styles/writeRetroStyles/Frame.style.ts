import styled from 'styled-components';

export const FrameStyle = styled.div<{ left: string }>`
  width: 347px;
  height: auto;
  border-radius: 10px 10px 0px 0px;
  border-width: 0.3px 0.3px 0px 0.3px;
  border-style: solid;
  border-color: #4d5e80;
  background-color: #f8f8f8;
  position: absolute;
  top: 261px;
  left: ${props => props.left};
  padding: 15px;
  border: 1px solid purple;
`;

export const TaskFrame = styled.div`
  width: 313px;
  height: auto;
  position: absolute;
  top: 112px;
  margin-left: 1px;
  border: 1px solid green;
`;

export const TaskBox = styled.div`
  width: 313px;
  height: auto;
  border: 1px solid red;
`;
