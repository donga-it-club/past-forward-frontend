import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 120px 30px auto;
`;

export const Title = styled.span`
  font-size: xx-large;
  font-weight: bold;
  padding-top: 25px;
  padding-bottom: 15px;
  padding-left: 400px;
  padding-right: 400px;
  border-bottom: 2px solid #111b47;
`;

export const SubTitle = styled.span`
  font-size: large;
  color: #a3a3a3;
  display: block;
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
  width: auto;
  height: 100%;
  margin-top: 10px;
`;
