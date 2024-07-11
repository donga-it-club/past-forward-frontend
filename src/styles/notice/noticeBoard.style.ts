import styled from 'styled-components';

export const NoticeBoardContainer = styled.div`
  grid-column: 2;
`;

export const NoticeBoardTitle = styled.p`
  width: auto;
  height: 48px;
  font-size: 32px;
  font-weight: 400;
  color: #000000;
  line-height: 48px;
`;

export const NoticeBoardBox = styled.div`
  width: 100%;
  height: auto;
  /* background-color: #f9fafb; */
  background-color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 1fr;
  grid-template-rows: 1fr 5fr;
  grid-auto-rows: minmax(76px, auto);
`;

export const NoticeBoardContentsBox = styled.div`
  grid-column: 1/5;
  grid-row: 2;
`;

export const NoticeBoardContentsLine = styled.div`
  width: 94%;
  justify-content: center;
  border-bottom: 1.3px solid rgba(0, 0, 0, 0.1);
  margin-left: 3%;
`;

export const NoticeBoardContentsStyle = styled.div`
  width: 100%;
  height: minmax(76px, auto);
  font-size: 20px;
  font-weight: 500;
  color: #25213b;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 1fr;
`;

export const NoticeWriteButton = styled.button`
  width: 60px;
  height: 22px;
  font-size: 20px;
  font-weight: 700;
  color: #486c8d;
  line-height: 22px;
  &:hover {
    cursor: pointer;
  }
`;

export const NoticeMoveArrow = styled.div`
  width: auto;
  height: 39px;
  display: flex;
  justify-content: center;
`;
