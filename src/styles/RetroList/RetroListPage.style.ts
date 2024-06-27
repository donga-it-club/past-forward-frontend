import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    padding-left: 5px;
    padding-right: 5px;
    justify-items: center;
  }
`;

export const SubContainer = styled.div`
  flex: 2;
  display: flex;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
`;

export const FilterContainer = styled.div`
  flex: 5;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 800px) {
    justify-self: center;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  align-self: center;
  @media screen and (max-width: 800px) {
    justify-self: center;
  }
`;

export const SortButtonContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 800px) {
    justify-self: center;
  }
`;

export const Box = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  width: 1000px;
  @media screen and (max-width: 800px) {
    padding: auto;
  }
`;

export const ControlBarContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 15px;
  display: flex;
`;

export const PageContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
