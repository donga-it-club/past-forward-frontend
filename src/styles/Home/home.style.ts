import styled from 'styled-components';

export const TopTriangleContainer = styled.div`
  position: relative;
  background-color: white;
  min-width: 1200px;
  height: 1000px;
`;

export const TopText = styled.p`
  margin-top: 100px;
  margin-left: 800px;
  color: #111b47;
`;

export const BottomText = styled.p`
  margin-top: 400px;
  margin-left: 100px;
  color: #111b47;
`;

export const BrandContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  clip-path: polygon(0 49%, 0 0, 100% 47%, 100% 100%);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(28, 28, 101, 1) 37%, rgba(36, 123, 218, 1) 100%);
`;

export const BrandSmallText = styled.p`
  color: white;
  font-size: 40px;
  margin-top: 40px;
  margin-right: 10px;
`;

export const BrandTextBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StartedFreeButton = styled.button`
  background-color: white;
  color: #111b47;
  font-size: 30px;
  padding: 10px 20px;
  margin-left: 70%;
  border-radius: 10px;
  &:hover {
    background-color: #ababab;
  }
`;
