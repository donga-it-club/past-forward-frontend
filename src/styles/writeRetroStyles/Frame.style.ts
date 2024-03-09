import styled from 'styled-components';

export const FrameStyle = styled.div<{ left: string }>`
  width: 347px;
  height: 831px;
  border-radius: 10px 10px 0px 0px;
  border-width: 0.3px 0.3px 0px 0.3px;
  border-style: solid;
  border-color: #4d5e80;
  background-color: #f8f8f8;
  position: absolute;
  top: 261px;
  left: ${props => props.left};
`;
