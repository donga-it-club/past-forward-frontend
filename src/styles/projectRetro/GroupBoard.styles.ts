import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;
`;

export const TitleContainter = styled.div`
  border-bottom: 1px solid rgba(17, 27, 71, 0.3);
  display: flex;
  margin-top: 15px;
`;

export const TitleText = styled.span`
  color: #111b47;
  font-size: x-large;
  font-weight: bold;
  border-bottom: 3px solid #111b47;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const Button = styled.button`
  background-color: #4972a8;
  color: white;
  padding: 5px 50px;
  border-radius: 3px;
  margin: 20px 0px 20px auto;
  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
