import styled from 'styled-components';

export const TitleBox = styled.div`
  margin: 0 10px;
`;

export const TitleStyle = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const TitleText = styled.p`
  width: auto;
  font-size: 30px;
  font-weight: 700;
  color: #434343;
  margin-top: 3px;
  margin-left: 20px;
`;

export const SettingMenuStyle = styled.div`
  box-shadow: 0px -2px 0px #a9a9a9 inset;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export const SettingMenuBox = styled.div<{ color: string }>`
  font-size: 28px;
  font-weight: 500;
  color: ${props => props.color};
  /* border-bottom: 4px solid ${props => props.color}; */
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SettingStyle = styled.div`
  width: 422px;
  height: auto;
  position: relative;
  margin: 0 auto;
  margin-top: 153px;
`;

export const SettingImage = styled.div`
  width: 422px;
  height: 260px;
  border: 5px solid #e0e0e0;
`;

export const SettingImageButtonBox = styled.div`
  width: 422px;
  height: auto;
  display: flex;
  margin-top: 23px;
`;

export const SettingImageButton = styled.button`
  width: 187px;
  height: 33px;
  background-color: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  margin: 0px 12px;
  position: relative;
`;

export const SettingImageButtonText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #8d8d8d;
  line-height: 33px;
`;

export const ReviseBox = styled.div`
  width: 422px;
  height: 66px;
  margin-top: 20px;
`;

export const ReviseTitle = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #3c3c3c;
  line-height: 20px;
  margin-right: 10px;
`;

export const UnableChange = styled.p`
  width: 55px;
  height: 18px;
  font-size: 7px;
  font-weight: 500;
  color: #f93333;
  line-height: 20px;
`;

export const ReviseInput = styled.input`
  width: 422px;
  height: 33px;
  font-size: 10px;
  font-weight: 400;
  color: #0e0e0e;
  background-color: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  padding: 0px 10px;
  margin-top: 13px;
  position: relative;
`;

export const UnableChangeInput = styled(ReviseInput)`
  background-color: #d9d9d933;
`;

export const ReviseLeaderStyle = styled.div`
  width: 422px;
  height: 33px;
  font-size: 10px;
  font-weight: 400;
  color: #0e0e0e;
  background-color: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  display: flex;
  padding: 0px 10px;
  margin-top: 13px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const ReviseLeaderInput = styled(ReviseInput)`
  width: 300px;
  height: 30px;
  border: none;
  margin-top: 0px;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
`;

export const UnlinedInput = styled(ReviseInput)`
  width: 390px;
  border: none;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

export const ReviseBottomTitle = styled.p`
  width: 422px;
  height: 25px;
  font-size: 12px;
  font-weight: 700;
  color: #111b47;
  box-shadow: 0px -2px 0px #111b47 inset;
`;

export const ReviseBottomText = styled.p`
  font-size: 9px;
  font-weight: 400;
  color: #636363;
`;

export const ReviseDeleteText = styled(ReviseBottomText)`
  font-size: 11px;
`;

export const ReviseDeleteButton = styled.button`
  width: 97px;
  height: 26px;
  font-size: 11px;
  font-weight: 500;
  color: #111b47;
  line-height: 26px;
  text-align: center;
  border: 1.3px solid #ff4646;
  border-radius: 10px;
  position: absolute;
  left: 280px;
  &:hover {
    cursor: pointer;
  }
`;

export const ReviseButtonStyle = styled.button`
  width: 97px;
  height: 26px;
  font-size: 11px;
  font-weight: 500;
  color: #111b47cc;
  line-height: 26px;
  text-align: center;
  border: 1.3px solid #c3cad9;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const ManageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 600px;
  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

export const ManageTitleStyle = styled.p`
  width: 150px;
  height: 46px;
  font-size: 30px;
  font-weight: 500;
  color: #434343;
  word-break: keep-all;
  @media (max-width: 1000px) {
    margin-right: 10px;
  }
`;

export const InvitationLinkButton = styled.button<{ backgroundColor: string; color: string }>`
  width: 130px;
  height: 33px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color};
  line-height: 33px;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  margin: auto 0;
  margin-left: 35px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  /* @media (max-width: 800px) {
    margin-left: 0px;
    margin-right: 15px;
  } */
  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-right: 15px;
  }
`;

export const LinkExpirationText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #f93333;
  margin: auto 10px;
  word-break: keep-all;
`;

export const ManageSearchInput = styled.input`
  width: 253px;
  height: 33px;
  font-size: 20px;
  font-weight: 500;
  background-color: #ffffff;
  border: 0.3px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0px 7px;
`;

export const ManageSearchButton = styled.button`
  width: 66px;
  height: 33px;
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
  color: #ffffff;
  line-height: 33px;
  text-align: center;
  background-color: #111b47;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

export const ManageAlarm = styled.div`
  position: absolute;
  top: 150px;
  right: 40px;
  @media (max-width: 1000px) {
    position: relative;
    margin-top: 7px;
    top: 0;
    right: 0;
  }
`;

export const ManageTableStyle = styled.div``;

export const ManageTableTrStyle = styled.tr`
  min-width: 1443px;
  &:hover {
    cursor: pointer;
    background-color: #f9fafb;
  }
`;

export const ManageTableDateTh = styled.th`
  width: 581px;
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  line-height: 78px;
  text-align: left;
  padding: 26px 16px;
`;

export const ManageTableEmailTh = styled(ManageTableDateTh)`
  width: 428px;
  box-shadow: 0px -1px 0px rgba(181, 181, 181, 0.2) inset;
`;

export const ManageTableNickNameTh = styled(ManageTableDateTh)`
  width: 240px;
  box-shadow: 0px -1px 0px rgba(181, 181, 181, 0.2) inset;
`;

export const ManageTableTaskTh = styled(ManageTableDateTh)`
  width: 194px;
  text-align: center;
`;

export const ManageTableDateTd = styled.td`
  width: 581px;

  font-size: 16px;
  font-weight: 400;
  color: #1f2937;
  line-height: 78px;
  text-align: left;
  padding: 26px 16px;
`;

export const ManageTableEmailTd = styled(ManageTableDateTd)`
  box-shadow: 0px -1px 0px rgba(181, 181, 181, 0.2) inset;
`;

export const ManageTableNickNameTd = styled(ManageTableDateTd)`
  width: 240px;
  box-shadow: 0px -1px 0px rgba(181, 181, 181, 0.2) inset;
`;

export const ManageTableTaskTd = styled(ManageTableDateTd)`
  width: 194px;
  text-align: center;
`;

export const NotTextInput = styled.div`
  background-color: #d9d9d9;
  border-radius: 5px;
  font-size: 20px;
  padding: 3px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: #989898;
`;

export const NoteChangeText = styled.p`
  font-size: 10px;
  color: red;
  margin: auto 10px;
`;

export const ReaderBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  padding: 3px;
  margin: 20px 0;
  color: black;
  display: flex;
`;

export const SettingLine = styled.div`
  border: 1px solid black;
  width: 100%;

  margin: 10px 0;
`;

export const SettingDetailText = styled.p`
  color: #636363;
  font-size: 15px;
  margin: auto 5px;
`;
export const NotMemberInfo = styled.p`
  font-size: 15px;
  color: #636363;
  margin: auto 0;
`;
