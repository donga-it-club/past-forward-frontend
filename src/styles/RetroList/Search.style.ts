import styled from 'styled-components';

export const SearchLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px auto;
`;

export const SearchInput = styled.input`
  border: 1px solid #111b47;
  border-radius: 30px;
  outline: none;
  width: 258px;
  height: 40px;
  padding-left: 45px;
  margin-right: 0;
  &::placeholder {
    color: #505f98;
  }
`;

export const SearchIconImg = styled.img`
  position: absolute;
  left: 20px;
  margin: 0;
`;
