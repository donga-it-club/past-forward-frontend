import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1050px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: inline-block;
    padding: 0;
    width: auto;
  }
`;

export const CreateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px dotted #a9a9a9;
  border-radius: 2px;
  width: 250px;
  height: 200px;
  margin: 50px;
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 190px;
  }
`;

export const Box = styled.div`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  width: 250px;
  height: 200px;
  margin: 50px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 260px;
    height: 200px;
  }
`;

export const InfoBox = styled.div`
  height: 50px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
export const TitleText = styled.p`
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
`;

export const InnerBox = styled.div`
  display: flex;
  padding: 5px 0px;
`;
