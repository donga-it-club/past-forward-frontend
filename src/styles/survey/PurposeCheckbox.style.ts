import styled from 'styled-components';

export const CustomContainer = styled.div`
  margin-bottom: 4rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 150%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
