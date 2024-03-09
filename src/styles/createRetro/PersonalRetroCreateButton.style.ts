import styled from 'styled-components';

interface TextProps {
  color: string;
  weight?: string;
}

export const CreateButtonBorder = styled.div`
  width: 25rem;
  height: 13rem;
  border-radius: 1rem;
  border: 2px solid rgba(17, 27, 71, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateButtonBackground = styled.div`
  width: 24rem;
  height: 12rem;
  border-radius: 1rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid rgba(17, 27, 71, 1);
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PlusIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Text = styled.div<TextProps>`
  color: ${props => props.color};
  font-weight: ${props => props.weight || 'normal'};
  margin-top: 1rem;
`;
