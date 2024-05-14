import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 10px 30px auto;
  padding-left: 115px;
  padding-right: 115px;
  margin-bottom: 100px;
`;

export const Title = styled.span`
  font-size: xx-large;
  font-weight: bold;
  padding-bottom: 10px;
  align-self: center;
  margin-top: 10px;
`;

export const SubTitle = styled.span`
  font-size: large;
  color: #a3a3a3;
  display: block;
  align-self: center;
  margin-top: 5px;
`;

export const TitleBox = styled.span`
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const SubtitleBox = styled.div`
  &:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  justify-self: center;
  align-self: center;
`;

export const Img = styled.img`
  width: 1100px;
  height: auto;
  justify-self: center;
  align-self: center;
`;

export const Line = styled.div`
  width: 900px;
  height: 2px;
  border: 1px solid #111b47;
  background-color: '#111b47';
  justify-self: center;
  align-self: center;
`;
