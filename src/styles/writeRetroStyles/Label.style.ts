import styled from 'styled-components';

export const LabelStyle = styled.div<{ background_color: string }>`
  width: 317px;
  height: 60px;
  border-radius: 5px;
  background-color: ${props => props.background_color}; // 블로그에 정리하기
  display: flex;
  position: absolute;
  top: 16px;
  left: 15px;
  box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.3);
`;

export const LabelMarkStyle = styled.div<{ mark_background_color: string }>`
  width: 3px;
  height: 30px;
  border-radius: 5px;
  background-color: ${props => props.mark_background_color};
  margin: auto 0;
  position: absolute;
  top: 15px;
  left: 12px;
`;

export const LabelTextStyle = styled.span<{ color: string }>`
  height: 20px;
  font-size: 18px;
  font-weight: 900;
  color: ${props => props.color};
  margin: auto 0;
  position: absolute;
  top: 20px;
  left: 25px;
`;

export const TaskCountStyle = styled.div`
  width: 22px;
  height: 24px;
  border-radius: 16px;
  background-color: #e4e4e4;
  position: absolute;
  top: 17.87px;
  left: 278px;
`;

export const TaskCountTextStyle = styled.span`
  font-size: 10px;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
