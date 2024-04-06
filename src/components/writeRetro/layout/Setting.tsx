import { useState } from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { IoPersonCircle } from 'react-icons/io5';
import { LiaExclamationCircleSolid } from 'react-icons/lia';
import { MdPeopleAlt } from 'react-icons/md';
import { RiFileUploadLine } from 'react-icons/ri';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

export const SettingTitle = () => {
  const title: string = 'FirstRetro';

  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex' }}>
          <MdPeopleAlt size="60px" color="#434343" />
          <S.TitleText>{title}</S.TitleText>
        </div>
      </S.TitleBox>
    </>
  );
};

export const SettingMenu = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const color = clicked ? '#111B47' : '#A9A9A9';

  return (
    <>
      <S.SettingMenuStyle>
        <S.SettingMenuBox color={color} onClick={handleClick}>
          회고 설정
        </S.SettingMenuBox>
        <Setting></Setting>
      </S.SettingMenuStyle>
    </>
  );
};

export const Setting = () => {
  return (
    <>
      <S.SettingStyle>
        <SettingImage></SettingImage>
        <ReviseTitle></ReviseTitle>
        <ReviseType></ReviseType>
        <ReviseTemplateType></ReviseTemplateType>
        <ReviseLeader></ReviseLeader>
        <ReviseExplanation></ReviseExplanation>
        <ReviseCompletion></ReviseCompletion>
        <ReviseDelete></ReviseDelete>
        <ReviseButton></ReviseButton>
      </S.SettingStyle>
    </>
  );
};

export const SettingImage = () => {
  return (
    <>
      <S.SettingImage></S.SettingImage>
      <S.SettingImageButtonBox>
        <S.SettingImageButton>
          <div style={{ width: '77px', display: 'flex', margin: '0 auto' }}>
            <div style={{ marginTop: '8px', marginRight: '10px' }}>
              <RiFileUploadLine size={'15px'} color="#8D8D8D" />
            </div>
            <S.SettingImageButtonText>변경하기</S.SettingImageButtonText>
          </div>
        </S.SettingImageButton>
        <S.SettingImageButton>
          <S.SettingImageButtonText>삭제하기</S.SettingImageButtonText>
        </S.SettingImageButton>
      </S.SettingImageButtonBox>
    </>
  );
};

export const ReviseTitle = () => {
  const previousTitle: string = '회고명을 입력하세요';
  return (
    <>
      <S.ReviseBox>
        <div style={{ display: 'flex' }}>
          <S.ReviseTitle>회고명</S.ReviseTitle>
        </div>
        <S.ReviseInput placeholder={previousTitle}></S.ReviseInput>
      </S.ReviseBox>
    </>
  );
};

export const ReviseType = () => {
  const previousType: string = '회고 유형을 입력하세요';
  return (
    <>
      <S.ReviseBox>
        <div style={{ display: 'flex' }}>
          <S.ReviseTitle>회고 유형</S.ReviseTitle>
          <S.UnableChange>ꞏ 변경 불가</S.UnableChange>
        </div>
        <S.UnableChangeInput placeholder={previousType} readOnly></S.UnableChangeInput>
      </S.ReviseBox>
    </>
  );
};

export const ReviseTemplateType = () => {
  const previousType: string = '회고 템플릿 유형을 입력하세요';
  return (
    <>
      <S.ReviseBox>
        <div style={{ display: 'flex' }}>
          <S.ReviseTitle>회고 템플릿 유형</S.ReviseTitle>
          <S.UnableChange>ꞏ 변경 불가</S.UnableChange>
        </div>
        <S.UnableChangeInput placeholder={previousType} readOnly></S.UnableChangeInput>
      </S.ReviseBox>
    </>
  );
};

export const ReviseLeader = () => {
  return (
    <>
      <S.ReviseBox>
        <div style={{ display: 'flex' }}>
          <S.ReviseTitle>회고 리더</S.ReviseTitle>
          <S.UnableChange>ꞏ 변경 불가</S.UnableChange>
        </div>
        <S.ReviseLeaderStyle>
          <div style={{ marginTop: '5px' }}>
            <IoPersonCircle size={'20px'} color="#C3CAD9" />
          </div>
          <S.ReviseLeaderInput placeholder="회고 리더" readOnly></S.ReviseLeaderInput>
        </S.ReviseLeaderStyle>
      </S.ReviseBox>
    </>
  );
};

export const ReviseExplanation = () => {
  const ReviseExplanation: string = '회고 설명을 입력하세요';
  return (
    <>
      <S.ReviseBox>
        <div style={{ display: 'flex' }}>
          <S.ReviseTitle>회고 설명</S.ReviseTitle>
        </div>
        <div style={{ display: 'flex', position: 'relative' }}>
          <S.UnlinedInput placeholder={ReviseExplanation}></S.UnlinedInput>
          <div style={{ position: 'absolute', top: '20px', left: '400px' }}>
            <BiSolidPencil />
          </div>
        </div>
      </S.ReviseBox>
    </>
  );
};

export const ReviseCompletion = () => {
  return (
    <div style={{ width: '422px', height: '70px', marginTop: '20px' }}>
      <S.ReviseBottomTitle>회고 최종완료</S.ReviseBottomTitle>
      <div style={{ display: 'flex', padding: '25px 25px 10px' }}>
        <div style={{ marginTop: '1px', marginRight: '5px' }}>
          <LiaExclamationCircleSolid size={'10px'} color="#FF4646" />
        </div>
        <S.ReviseBottomText>최종 완료 시, Done으로 표시되며 참여자는 수정이 불가합니다.</S.ReviseBottomText>
      </div>
    </div>
  );
};

export const ReviseDelete = () => {
  return (
    <div style={{ width: '422px', height: '80px', marginTop: '20px' }}>
      <S.ReviseBottomTitle>회고 삭제</S.ReviseBottomTitle>
      <div style={{ display: 'flex', padding: '20px 25px 10px', position: 'relative' }}>
        <div style={{ marginTop: '3px', marginRight: '5px' }}>
          <LiaExclamationCircleSolid size={'10px'} color="#FF4646" />
        </div>
        <S.ReviseDeleteText>삭제 후 복구할 수 없습니다.</S.ReviseDeleteText>
        <S.ReviseDeleteButton>회고 삭제</S.ReviseDeleteButton>
      </div>
    </div>
  );
};

export const ReviseButton = () => {
  return (
    <div style={{ marginTop: '25px', position: 'relative' }}>
      <div style={{ display: 'flex', marginLeft: '200px' }}>
        <S.ReviseButtonStyle>CANCLE</S.ReviseButtonStyle>
        <S.ReviseButtonStyle>SAVE</S.ReviseButtonStyle>
      </div>
    </div>
  );
};
