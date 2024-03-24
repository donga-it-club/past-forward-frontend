import styled from 'styled-components';

export const FrameBox = styled.div<{ left: string }>`
  width: 347px;
  height: auto;
  position: absolute;
  top: 261px;
  left: ${props => props.left};
`;

export const FrameStyle = styled.div`
  width: 347px;
  min-height: 847px;
  height: auto;
  border-radius: 10px 10px 0px 0px;
  border-width: 0.3px 0.3px 0px 0.3px;
  border-style: solid;
  border-color: #4d5e80;
  background-color: #f8f8f8;
  position: relative;
  padding: 15px;
`;

export const TaskFrame = styled.div`
  width: 313px;
  height: auto;
  position: relative;
  margin-left: 1px;
`;

export const TaskBox = styled.div`
  width: 313px;
  height: auto;
`;
