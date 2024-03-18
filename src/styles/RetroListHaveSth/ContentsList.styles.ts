import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Box 틀을 가운데 정렬 */
`;

export const Box = styled.div`
  border: 1px solid #d9d9d9;
  width: 200px; /* 한 줄에 4개씩 정렬하기 위한 너비 설정 */
  height: 190px;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
  /* flex-grow: 1; */
`;

export const ImgBox = styled.div`
  height: 110px;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const MoreIcon = styled.img`
  width: 15px;
  height: 5px;
  margin-left: auto;
`;
