import styled from 'styled-components';

interface DescriptionTitleProps {
  backgroundColor?: string;
}

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SpacedLeft = styled.div`
  margin: 10px auto;
`;

export const SpacedRight = styled.div`
  margin: 10px auto;
`;

export const DescriptionTitle = styled.div<DescriptionTitleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 80px;
  border-radius: 0.5rem;
  border: 2px solid rgba(17, 27, 71, 1);
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color || 'white'};
  @media (max-width: 800px) {
    margin: 0 20px;
  }
`;

export const TipBox = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
`;

export const HowToUseText = styled.div`
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #3d7dc9;
  color: white;
  border-radius: 5px;
  min-width: max-content;
`;
