import styled from 'styled-components';

export const SubTaskStyle = styled.div`
  width: auto;
  height: 20px;
  position: relative;
  display: flex;
  margin-left: 15px;
`;

export const SubTaskIconBox = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;

export const SubTaskIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TaskSubCount = styled.p`
  width: auto;
  height: 20px;
  font-size: 10px;
  font-weight: 700;
  color: #6b7a99;
  margin-left: 7px;
  line-height: 20px;
`;
