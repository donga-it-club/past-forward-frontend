import styled from 'styled-components';
export const Conatiner = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 10px;
`;
export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const LeftArrow = styled.span`
  background-color: #f0f0f0;
  margin-right: 10px;
  font-weight: bold;
  font-size: large;
  color: #888888;
  padding: 3px;
  border-radius: 3px;
`;

export const RightArrow = styled.span`
  background-color: #f0f0f0;
  margin-left: 10px;
  font-weight: bold;
  font-size: large;
  color: #888888;
  padding: 3px;
  border-radius: 3px;
`;

export const PageNumberContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: inline;
`;

export const PageNumber = styled.button<{ active?: boolean }>`
  font-size: large;
  font-weight: bold;
  color: ${({ active }) => (active ? '#111b47' : '#c3c3c3')};

  &:active,
  &:focus {
    outline: none;
  }
`;
