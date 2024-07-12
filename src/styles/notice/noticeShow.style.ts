import styled from 'styled-components';

export const NoticeShowContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
`;

export const NoticeShowHeaderStyle = styled.div`
  width: 100%;
  height: auto;
`;

export const NoticeShowTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #25213b;
  margin-bottom: 20px;
`;

export const NoticeShowInformation = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #25213b;
  margin-bottom: 20px;
`;

export const NoticeShowHeaderLine = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NoticeShowFooterStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: repeat(2, 1fr);
`;

export const OtherNoticeArrow = styled.div`
  display: block;
`;

export const OtherNoticeTitle = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #25213b;
  text-align: left;
  grid-column: 2;
`;
