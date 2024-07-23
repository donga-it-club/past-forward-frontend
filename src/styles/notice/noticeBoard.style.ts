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
  margin-bottom: 114px;
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
  grid-template-rows: 1fr 10fr;
  grid-auto-rows: minmax(76px, auto);
  margin-bottom: 38px;
`;

export const NoticeBoardContentsTitle = styled.p`
  height: auto;
  min-height: 76px;
  display: grid;
  align-items: center;
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
  min-height: 76px;
  height: auto;
  font-size: 20px;
  font-weight: 500;
  color: #25213b;
  text-align: center;
  align-items: center;
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
  margin-bottom: 152px;
  &:hover {
    cursor: pointer;
  }
`;

export const NoticePaginationContainer = styled.div`
  width: auto;
  height: 39px;
  display: flex;
  justify-content: center;
`;

export const NoticePaginationButton = styled.button`
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: grid;
  justify-content: center;
  /* background-color: red; */
  &:hover {
    cursor: pointer;
  }
  margin: 0px 20px;
`;
