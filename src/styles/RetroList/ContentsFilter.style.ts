import styled from 'styled-components';

export const ContentsFilterButton = styled.button`
  border: none;
  background-color: rgb(247, 250, 252);
  color: #949494;
  padding: 5px 15px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  &.active {
    color: #111b47;
    border-bottom: 4px solid #111b47;
  }
  &:focus {
    color: #111b47;
    border-bottom: 4px solid #111b47;
  }
`;
