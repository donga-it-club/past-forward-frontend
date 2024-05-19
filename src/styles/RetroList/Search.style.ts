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
  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    position: absolute;
    right: 5%;
    background-image: url('data:image/svg+xml;utf8,<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 145.1L366.9 112 256 222.9 145.1 112 112 145.1 222.9 256 112 366.9 145.1 400 256 289.1 366.9 400 400 366.9 289.1 256z"/></svg>');
    background-repeat: no-repeat;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SearchIconImg = styled.img`
  position: absolute;
  left: 20px;
  margin: 0;
`;
