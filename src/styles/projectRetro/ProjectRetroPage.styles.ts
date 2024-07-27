import styled from 'styled-components';

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const ProjectMenuText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding: 2px 15px;
  margin-left: 10px;
  border-radius: 3px;
  color: white;
  background-color: #111b47;
  text-decoration: none;
`;

export const DescriptionBox = styled.div`
  margin-left: auto;
  padding-right: 40px;
`;
export const DescriptionText = styled.span`
  color: #a9a9a9;
  font-size: small;
`;

export const FilterContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
