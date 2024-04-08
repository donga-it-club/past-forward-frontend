import { useState } from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const WriteRetroReviseTeamPage = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const color = clicked ? '#111B47' : '#A9A9A9';

  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex' }}>
          <MdPeopleAlt size="60px" color="#434343" />
          <S.TitleText>FistRetro</S.TitleText>
        </div>
      </S.TitleBox>
      {/* <SettingMenu></SettingMenu> */}
      <S.SettingMenuStyle>
        <S.SettingMenuBox color={color} onClick={handleClick}>
          팀원 관리
        </S.SettingMenuBox>
        <S.ManageStyle>
          <div style={{ height: '46px', display: 'flex' }}>
            <S.ManageTitleStyle>팀원 관리</S.ManageTitleStyle>
            <S.InvitationLinkButton>팀원 초대 링크</S.InvitationLinkButton>
            <S.LinkExpirationText>ꞏ 링크는 2시간 후에 만료됩니다.</S.LinkExpirationText>
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <S.ManageSearchInput placeholder="이름 또는 이메일 주소를 검색"></S.ManageSearchInput>
            <S.ManageSearchButton>검색</S.ManageSearchButton>
          </div>
          <S.ManageTableStyle>
            {/* TableHeader */}
            <S.ManageTableTrStyle>
              <S.ManageTableNickNameTh>닉네임</S.ManageTableNickNameTh>
              <S.ManageTableEmailTh>이메일</S.ManageTableEmailTh>
              <S.ManageTableDateTh>회고 참여 일자</S.ManageTableDateTh>
              <S.ManageTableTaskTh>직업</S.ManageTableTaskTh>`
            </S.ManageTableTrStyle>
            {/* TableBody */}
            <S.ManageTableTrStyle>
              <S.ManageTableNickNameTd>
                <div style={{ display: 'flex', backgroundColor: 'red' }}>
                  <div>
                    <IoPersonCircle size={'39px'} color="#C3CAD9" />
                  </div>
                  <div style={{ width: '164px', textAlign: 'center' }}>이채연</div>
                </div>
              </S.ManageTableNickNameTd>
              <S.ManageTableEmailTd>2115891@donga.ac.kr</S.ManageTableEmailTd>
              <S.ManageTableDateTd>2024-03-12 12:50</S.ManageTableDateTd>
              <S.ManageTableTaskTd></S.ManageTableTaskTd>
            </S.ManageTableTrStyle>
          </S.ManageTableStyle>
        </S.ManageStyle>
      </S.SettingMenuStyle>
    </>
  );
};

export default WriteRetroReviseTeamPage;
