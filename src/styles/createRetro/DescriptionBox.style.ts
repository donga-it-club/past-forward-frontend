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
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const SpacedRight = styled.div`
  margin-top: 1rem;
  margin-left: 5rem;
`;

export const DescriptionTitle = styled.div<DescriptionTitleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 2rem;
  margin-left: 5rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  border: 2px solid rgba(17, 27, 71, 1);
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color || 'white'};
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
`;
