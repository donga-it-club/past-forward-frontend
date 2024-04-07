import { IoIosMore } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const Title = () => {
  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex' }}>
          <MdPeopleAlt size="60px" color="#434343" />
          <S.TitleText>FirstRetro</S.TitleText>
        </div>
        <S.SubTitleText>첫 회고 진행 - 앞으로 남은 회고는 2번!</S.SubTitleText>
      </S.TitleBox>
      <S.SaveSettingBox>
        <S.SaveButton>SAVE</S.SaveButton>
        <S.SettingButton>
          <IoIosMore size={'40px'} color="#B1B2B2" />
        </S.SettingButton>
      </S.SaveSettingBox>
    </>
  );
};

export default Title;
