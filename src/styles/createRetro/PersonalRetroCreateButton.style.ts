import styled from 'styled-components';

interface TextProps {
  color: string;
  weight?: string;
}

export const CreateButtonBorder = styled.div`
  border-radius: 1rem;
  border: 2px solid rgba(17, 27, 71, 1);
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 30px;
`;

export const CreateButtonBackground = styled.div`
  border-radius: 1rem;
  background-color: white;
  border-radius: 1rem;
  padding: 20px;
  border: 1px solid rgba(17, 27, 71, 1);

  @media (max-width: 800px) {
    min-height: 200px;
  }
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
