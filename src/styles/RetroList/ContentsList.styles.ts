import styled from 'styled-components';

export const BoardContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Box = styled.div`
  border: 1px solid #d9d9d9;
  width: 200px;
  height: 190px;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const ImgBox = styled.div`
  height: 110px;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-content: stretch;
`;

export const RetroTitle = styled.span`
  font-size: 15px;
  margin-left: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export const RetroUser = styled.span`
  align-self: center;
  font-size: x-small;
`;
export const RetroDate = styled.span`
  align-self: center;
  font-size: x-small;
  color: #989898;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const TeamIcon = styled.img`
  width: 20px;
  height: auto;
`;

export const MoreIcon = styled.img`
  width: 15px;
  height: 4px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const MoreIconListView = styled.img`
  width: 20px;
  height: 6px;
  &:hover {
    cursor: pointer;
  }
`;

export const BookmarkIcon = styled.img`
  width: 15px;
  height: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const ListTopBox = styled.div`
  display: flex;
  justify-content: space-around;
  color: #9b9b9b;
  margin-bottom: 15px;
`;

export const ItemBox = styled.li`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
`;

export const ListTitleBox = styled.div`
  flex: 1;
  &:hover {
    cursor: pointer;
  }
`;
export const ListUserBox = styled.div`
  flex: 1;
`;
export const ListTimeBox = styled.div`
  flex: 1;
`;
export const ListBookmarkBox = styled.div`
  flex: 1;
`;
export const ListLinkBox = styled.div`
  flex: 1;
`;
export const ListProgressBox = styled.div`
  flex: 1;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
