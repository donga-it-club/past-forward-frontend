import styled from 'styled-components';

export const NoticeShowContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
`;

export const NoticeShowHeaderStyle = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: grid;
  justify-items: center;
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

export const NoticeShowButtonContainer = styled.div`
  width: 150px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const NoticeDeleteButton = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border-radius: 5px;
  background-color: red;
`;

export const NoticeReviseButton = styled(NoticeDeleteButton)`
  background-color: #cfcfcf;
`;

export const NoticeShowMainStyle = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 15fr 1fr;
`;

export const NoticeShowText = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

export const NoticeShowImgContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const NoticeShowImg = styled.div`
  width: auto;
  height: auto;
  min-width: 300px;
  min-height: 300px;
  border-radius: 5px;
`;

export const NoticeShowHeaderLine = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NoticeShowFooterStyle = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 50px;
`;

export const NoticeShowFooterLine = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NoticeShowMoveStyle = styled.div`
  width: 100%;
  height: auto;
  min-height: 80px;
  display: grid;
  grid-template-columns: 1fr 18fr;
`;

export const NoticeMoveArrow = styled.div`
  width: auto;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const NoticeMoveTitle = styled.p`
  width: auto;
  height: auto;
  font-size: 30px;
  font-weight: 500;
  color: #25213b;
  text-align: left;
  display: grid;
  grid-column: 2;
  align-items: center;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;
