import styled from 'styled-components';

export const NoticeMenuBarStyle = styled.div`
  width: 100vw;
  height: 180px;
  background-color: #ffffff;
  /* border: 1px solid #cfcfcf; */
  box-shadow: 0 -10px 10px 10px #cfcfcf;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 1;
`;

export const NoticeMenuTitle = styled.p`
  width: 111px;
  height: 45px;
  font-size: 32px;
  font-weight: 500;
  color: #495364;
  line-height: 45px;
  margin-left: 34px;
  justify-content: left;
`;

export const NoticeWriteButtonContainer = styled.div`
  width: 250px;
  display: flex;
  justify-self: right;
  justify-content: flex-end;
  margin-right: 5vw;
`;

export const NoticeSaveButton = styled.button`
  width: 56px;
  height: 35px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  line-height: 35px;
  text-align: center;
  background-color: #00063f;
  border-radius: 6px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const NoticeTempSaveButton = styled(NoticeSaveButton)`
  width: auto;
  color: #8e8e8e;
  background-color: #ffffff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0px 10px;
`;

export const NoticeCancelButton = styled(NoticeSaveButton)`
  background-color: #b3b3b3;
`;

export const NoticeReviseButton = styled(NoticeSaveButton)`
  background-color: #00063f;
`;

export const NoticeAddObjectsContainer = styled.div`
  width: auto;
  height: auto;
  grid-column: 1/3;
  grid-row: 2/3;
`;

export const NoticeMenuLine = styled.div`
  border-top: 1px solid #cfcfcf;
`;

export const NoticeAddObjectsStyle = styled.div`
  width: 70px;
  height: 90px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const NoticeAddObjectsIcon = styled.div`
  width: 50px;
  height: 50px;
`;

export const NoticeAddObjectsText = styled.p`
  width: auto;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #cfcfcf;
  line-height: 20px;
  text-align: center;
`;

export const NoticeWriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
`;

export const NoticeWriteBoxStyle = styled.div`
  background-color: #ffffff;
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
`;

export const NoticeWriteMain = styled.div`
  grid-column: 2;
`;

export const NoticeWriteMainTitle = styled.textarea`
  width: 100%;
  height: auto;
  font-size: 36px;
  font-weight: 500;
  padding-bottom: 15px;
  margin-top: 210px;
  &:focus {
    outline: none; /* 포커스 시 검은색 테두리 제거 */
  }
  ::placeholder {
    color: #cecece;
  }
  resize: none;
  overflow: hidden;
`;

export const NoticeWriteMainLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #cfcfcf;
`;

export const NoticeWriteMainContents = styled(NoticeWriteMainTitle)`
  font-size: 24px;
  line-height: 34px;
  margin: 40px 0px;
`;

export const NoticeShowImgContainer = styled.div`
  width: auto;
  height: auto;
  display: grid;
`;

export const NoticeShowImgStyle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: orange;
`;
