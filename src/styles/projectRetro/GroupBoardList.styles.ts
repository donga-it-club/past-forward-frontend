import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  border: 1px solid #d9d9d9;
  width: 200px;
  height: 190px;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: #a9a9a9;
  font-size: large;
  font-weight: bold;
`;
