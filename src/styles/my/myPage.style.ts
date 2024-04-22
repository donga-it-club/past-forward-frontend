import styled from 'styled-components';

export const MyPageBGContainer = styled.div`
  display: flex;
  padding: 5px 25%;
`;
export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #111b47;
  height: 4rem;
  color: white;
  justify-items: center;
  align-items: center;
  font-size: 40px;
  margin: 10px 0;
`;

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 800px;
  background-color: rgba(251, 251, 251, 1);
  /* margin: auto 0; */
  margin-top: 2rem;
  margin-bottom: 8rem;
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

export const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const NicknameBox = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 2rem;
//   font-size: 18px;
//   border: 1px solid #717171;
//   border-radius: 10px;
//   background-color: white;
//   width: 98%;
//   height: 45px;
//   display: flex;
//   align-items: center;
//   padding: 0 1rem;
// `;

export const NicknameUpdateBox = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const UpdateButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NicknameDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

export const SubName = styled.h2<{ fontSize: string }>`
  color: #111b47;
  padding: 10px 5px;
  font-size: ${props => props.fontSize};
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div<{ background_color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.background_color};
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: 1px solid #717171;
  width: 98%;
  height: 45px;
  border-radius: 45px;
  padding: 0 1rem;
  /* font-size: 18px; */
`;

export const KakaoIcon = styled.img`
  width: 20px;
  margin: auto 10px;
`;

export const PWBox = styled.div`
  margin: 10px 5px;
`;

export const PWFont = styled.div`
  font-size: 15px;
  margin: 5px 10px;
`;

export const PWInput = styled.input`
  font-size: 15px;
  margin: 5px 10px;
  width: 150px;
`;

export const deleteContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;
