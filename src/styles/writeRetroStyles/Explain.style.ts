import styled from 'styled-components';

export const ExplainButtonStyle = styled.button`
  width: 155px;
  height: 38px;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  line-height: 38px;
  text-align: center;
  background-color: #4972a8;
  border-radius: 5px;
`;

// 흰색 바탕
export const ExplainStyle = styled.div`
  border-radius: 10px;
  overflow: auto;
  position: relative;
  padding: 29px 11px;
`;

export const modalStyle = {
  maxWidth: '934px',
  height: '523px',
  borderRadius: '10px',
  '@media (max-width: 800px)': {
    width: '90vw',
    height: 'auto',
  },
};

export const ExplainTitleBox = styled.div`
  display: flex;
`;

export const ExplainSideTitle = styled.div`
  margin-left: 5px;
  /* position: absolute;
  margin-top: 15px; */
  /* left: 154px; */
`;

export const RecommendMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #878787;
  line-height: 35px;
  margin-left: 5px;
`;

export const ExplainTitle = styled.div`
  font-size: 20px;
  padding: 10px;
  font-weight: 500;
  margin: 10px 0;
  color: #ffffff;
  line-height: 42px;
  text-align: center;
  background-color: #111b47;
  border-radius: 8px;
`;

export const ExplainBody = styled.div`
  /* width: 438px; */
  /* height: 388px; */
  /* background-color: gray; */
  padding-left: 13px;
  margin: 25px auto;
`;

export const ExplainLine = styled.div`
  /* height: 388px; */
  border-right: 1px dashed #b6b6b6;
  margin-top: 25px;
`;

export const ExplainSubTitle = styled.p`
  width: 96px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #3f3f3f;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const ExplainContent = styled.p`
  width: 411px;
  height: auto;
  display: flex;
  /* background-color: red; */
`;

export const ExplainContentSpan = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: #3f3f3f;
  line-height: 30px;
  margin-left: 5px;
  word-break: keep-all;
`;

export const ExplainImgStyle = styled.div`
  min-width: 102px;
  max-height: 28px;
  background-color: #111b47;
  border-radius: 5px;
  display: flex;
`;

export const ExplainImgLine = styled.div`
  width: 2px;
  height: 15px;
  background-color: #ffffff;
  border-radius: 2px;
  margin: 6px;
`;

export const ExplainTextImg = styled.div`
  width: 50px;
  height: 17px;
  background-color: #f8f8f8;
  border: 1px solid #adb8cc;
  border-radius: 3px;
  display: flex;
  margin-left: 3px;
`;

export const ExplainCloseButton = styled.div`
  width: 52px;
  height: 52px;
  font-size: 55px;
  font-weight: 600;
  color: #ffffff;
  background-color: #111b47;
  border-radius: 50%;
`;
