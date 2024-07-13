import styled from 'styled-components';

export const NoticeMenuBarStyle = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #ffffff;
  /* border: 1px solid #cfcfcf; */
  box-shadow: 0 -10px 10px 10px #cfcfcf;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  margin-top: 24px;
  margin-left: 34px;
  justify-content: left;
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

export const NoticeCancelButton = styled(NoticeSaveButton)`
  background-color: #b3b3b3;
`;

export const NoticeTemporarySaveButton = styled(NoticeSaveButton)`
  width: 79px;
  color: #8e8e8e;
  background-color: #ffffff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
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
  margin-top: 120px;

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
  margin-top: 40px;
`;
