import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  padding-top: 140px;
  padding-left: 115px;
  padding-right: 115px;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
    margin: auto;
  }
`;

export const ResponsiveTitleContainer = styled.div`
  @media screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleBox = styled.span`
  justify-self: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.span`
  font-size: xx-large;
  font-weight: bold;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: large;
    border: none;
    padding: 10px 0px;
  }
`;

export const SubtitleBox = styled.div`
  justify-self: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.span`
  font-size: large;
  color: #a3a3a3;
  display: block;
  @media screen and (max-width: 768px) {
    font-size: small;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ResponsiveContentContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: 10vw;
  }
`;

export const CategoryBox = styled.div`
  display: flex;
  color: #000000;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 3px;
    margin-right: 3px;
    flex: 1;
    height: 15vh;
    min-height: 15vh;
    max-height: 15vh;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const CategoryTitleText = styled.div`
  @media screen and (max-width: 768px) {
    font-size: x-small;
  }
`;
export const CheckIcon = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 3px;
  }
`;

export const ResponsiveHexagonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
    align-items: center;
  }
`;

export const HexagonWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  place-items: stretch;
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 2.5px 0 2.5px 10px;
    flex: 1;
    height: 15vh;
    min-height: 15vh;
    max-height: 15vh;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 1.5vh;
  }
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
  @media screen and (max-width: 768px) {
    width: ${({ size }) => size * 0.4}px;
    height: ${({ size }) => ((2 * (size * 0.4)) / 3) * Math.sqrt(3)}px;
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
  @media screen and (max-width: 768px) {
    display: none;
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
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
    top: 40%;
    left: 48%;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 6px;
    top: 50%;
    left: 50%;
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 900px;
  height: 2px;
  border: 1px solid #111b47;
  background-color: '#111b47';
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 70vw;
    height: auto;
  }
`;
