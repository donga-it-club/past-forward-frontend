import styled from 'styled-components';

export const MyPageBGContainer = styled.div`
  display: flex;
  padding: 5px 25%;
`;
export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #111b47;
  height: 100px;
  color: white;
  justify-items: center;
  align-items: center;
  font-size: 60px;
  margin: 10px 0;
`;

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 80%;
  background-color: #e6e6e6;
  margin: auto 0;
  border: 1px solid #505f98;
  border-radius: 5%;
  padding: 20px 50px;
`;

export const MainName = styled.h1`
  color: #111b47;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`;
export const DivingLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 0;
  border: 1px solid #111b47;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px 25%;
  margin: 0 auto;
  align-items: center;
`;

export const OrdinaryButton = styled.button<{ color: string }>`
  background: white;
  color: #111b47;
  margin: 10px 20px;
  border: 2px solid ${props => props.color};
  border-radius: 3px;
  font-size: 12px;
  padding: 10px;
  border-radius: 10%;
`;

export const ImageButtonBox = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const NicknameInput = styled.input`
  margin: 5px 10px;
  font-size: 20px;
`;

export const SubName = styled.h2<{ fontSize: string }>`
  color: #111b47;
  padding: 10px 5px;
  font-size: ${props => props.fontSize};
`;

export const PWBox = styled.div`
  margin: 10px 5px;
`;

export const PWFont = styled.p`
  font-size: 15px;
  margin: 5px 10px;
`;

export const PWInput = styled.input`
  font-size: 15px;
  margin: 5px 10px;
  width: 150px;
`;
