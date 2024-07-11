import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  border-bottom: 1px solid #949494;
`;

export const Button = styled.button`
  padding-left: 25px;
  padding-right: 25px;
  color: #949494;
  font-weight: bold;
  font-size: large;
  &.active {
    color: #111b47;
    border-bottom: 4px solid #111b47;
  }
  &:focus {
    color: #111b47;
    border-bottom: 4px solid #111b47;
  }
`;
