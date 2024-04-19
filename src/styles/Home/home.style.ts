import styled from 'styled-components';

export const TopText = styled.p`
  margin-top: 50px;
  margin-left: 55%;
  color: #111b47;
`;

export const BottomText = styled.p`
  margin-top: 30%;
  margin-left: 5%;
  color: #111b47;
`;

export const BrandContainer = styled.div`
  clip-path: polygon(15% 0%, 100% 67%, 100% 100%, 80% 100%, 0 40%, 0 0);
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(28, 28, 101, 1) 37%, rgba(36, 123, 218, 1) 100%);
  padding: 10% 5%;
`;

export const BrandSmallText = styled.p`
  color: white;
  font-size: 40px;
  padding-top: 50px;
`;

export const BrandTextBox = styled.div`
  display: flex;
`;

export const StartedFreeButton = styled.button`
  background-color: white;
  color: #111b47;
  font-size: 30px;
  padding: 10px 40px;
  margin-left: 70%;
  border-radius: 10px;
  &:hover {
    background-color: #ababab;
  }
`;
export const TopTriangleContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
`;
