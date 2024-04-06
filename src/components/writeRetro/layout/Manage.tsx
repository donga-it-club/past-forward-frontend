import { useState } from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

export const ManageMenu = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const color = clicked ? '#111B47' : '#A9A9A9';

  return (
    <>
      <S.SettingMenuStyle>
        <S.SettingMenuBox color={color} onClick={handleClick}>
          팀원 관리
        </S.SettingMenuBox>
        <Manage></Manage>
      </S.SettingMenuStyle>
    </>
  );
};

export const Manage = () => {
  return (
    <>
      <S.ManageStyle>
        <ManageTitle></ManageTitle>
        <ManageSearch></ManageSearch>
        <ManageTable></ManageTable>
      </S.ManageStyle>
    </>
  );
};

export const ManageTitle = () => {
  return (
    <div style={{ height: '46px', display: 'flex' }}>
      <S.ManageTitleStyle>팀원 관리</S.ManageTitleStyle>
      <S.InvitationLinkButton>팀원 초대 링크</S.InvitationLinkButton>
      <S.LinkExpirationText>ꞏ 링크는 2시간 후에 만료됩니다.</S.LinkExpirationText>
    </div>
  );
};

export const ManageSearch = () => {
  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      <S.ManageSearchInput placeholder="이름 또는 이메일 주소를 검색"></S.ManageSearchInput>
      <S.ManageSearchButton>검색</S.ManageSearchButton>
    </div>
  );
};

export const ManageTable = () => {
  return (
    <>
      <S.ManageTableStyle>
        {/* TableHeader */}
        <S.ManageTableTrStyle>
          <S.ManageTableNickNameTh>닉네임</S.ManageTableNickNameTh>
          <S.ManageTableEmailTh>이메일</S.ManageTableEmailTh>
          <S.ManageTableDateTh>회고 참여 일자</S.ManageTableDateTh>
          <S.ManageTableTaskTh>직업</S.ManageTableTaskTh>`
        </S.ManageTableTrStyle>
        {/* TableBody */}
        <ManageTableData></ManageTableData>
      </S.ManageTableStyle>
    </>
  );
};

export const ManageTableData = () => {
  const nickName: string = '이채연';
  const Email: string = '2115891@donga.ac.kr';
  const Date: string = '2024-03-12 12:50';

  return (
    <>
      <S.ManageTableTrStyle>
        <S.ManageTableNickNameTd>
          <div style={{ display: 'flex', backgroundColor: 'red' }}>
            <div>
              <IoPersonCircle size={'39px'} color="#C3CAD9" />
            </div>
            <div style={{ width: '164px', textAlign: 'center' }}>{nickName}</div>
          </div>
        </S.ManageTableNickNameTd>
        <S.ManageTableEmailTd>{Email}</S.ManageTableEmailTd>
        <S.ManageTableDateTd>{Date}</S.ManageTableDateTd>
        <S.ManageTableTaskTd></S.ManageTableTaskTd>
      </S.ManageTableTrStyle>
    </>
  );
};
