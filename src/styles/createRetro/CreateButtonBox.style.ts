import styled from 'styled-components';

export const ButtonListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SpacedButton = styled.div`
  margin: 0 20px; // 버튼 간 간격 만듦
  cursor: pointer;
`;
