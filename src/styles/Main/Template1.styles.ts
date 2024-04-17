import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 90px 30px 60px auto;
  overflow-x: hidden;
  padding-left: 115px;
  padding-right: 115px;
`;

export const TitleBox = styled.span`
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column: 1 / span 5;
  }
  justify-self: center;
  align-self: center;
`;

export const Title = styled.span`
  font-size: xx-large;
  font-weight: bold;
  padding-bottom: 10px;
  padding-left: 400px;
  padding-right: 400px;
  border-bottom: 2px solid #111b47;
`;

export const SubtitleBox = styled.div`
  &:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column: 1 / span 5;
  }
  justify-self: center;
  align-self: center;
`;

export const SubTitle = styled.span`
  font-size: large;
  color: #a3a3a3;
  display: block;
`;

export const CategoryTitle = styled.div`
  &:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column: 1 / span 5;
  }
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CategoryBox = styled.div`
  display: flex;
  color: #000000;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CheckIcon = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
  margin-right: 10px;
`;

export const HexagonWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  place-items: stretch;
  position: relative;
  left: 10%;
`;

export const Hexagon = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => ((2 * size) / 3) * Math.sqrt(3)}px;
  background-color: #f3f3f3;
  transition: background-color 0.7s ease;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform: rotate(30deg);
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #111b47;
    & > span.HoverTitle,
    & > img.HoverIcon,
    & > span.HoverContent,
    & > div.Divider {
      opacity: 1;
    }
  }
`;

export const HexaText = styled.span`
  position: absolute;
  top: 55%;
  left: 55%;
  transform: translateX(-50%) rotate(-30deg);
  color: #888888;
  opacity: 1;
  transition: opacity 0.5s ease;
  ${Hexagon}:hover & {
    opacity: 0;
  }
`;

export const HexaIcon = styled.img`
  position: absolute;
  top: 35%;
  left: 42.5%;
  width: 30px;
  height: 30px;
  transform: translateX(-50%) rotate(-30deg);
  opacity: 1;
  transition: opacity 0.5s ease;
  ${Hexagon}:hover & {
    opacity: 0;
  }
`;

export const HoverTitleText = styled.span`
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%) rotate(-30deg);
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.7s ease;
`;

export const HoverContentText = styled.span`
  font-size: 0.85em;
  width: 200px;
  position: absolute;
  top: 70%;
  left: 62.5%;
  transform: translate(-50%, -50%) rotate(-30deg);
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.7s ease;
`;

export const HoverIcon = styled.img`
  position: absolute;
  top: 30%;
  left: 35%;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%) rotate(-30deg);
  opacity: 0;
  transition: opacity 0.7s ease;
`;

export const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%) rotate(-30deg);
  border-bottom: 2px solid white;
  opacity: 0;
  transition: opacity 0.7s ease;
`;

export const Line = styled.div`
  width: 900px;
  height: 2px;
  border: 1px solid #111b47;
  background-color: '#111b47';
  justify-self: center;
  align-self: center;
`;
