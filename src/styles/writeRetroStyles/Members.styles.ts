import styled from 'styled-components';

export const ListContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 280px;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid #c8c8c8;
  border-radius: 10px;
  background-color: #f4f4f4;
`;

export const Title = styled.span`
  color: #969696;
`;

export const TitleContainer = styled.div`
  background-color: #f0f0f0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
`;

export const ListBox = styled.ul``;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #969696;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileImage = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  width: 30px;
  height: 30px;
`;

export const UserName = styled.span`
  padding-left: 10px;
`;
