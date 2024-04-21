import { FC } from 'react';
import { IoIosMore } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  name: string | undefined;
}

const Title: FC<Props> = ({ name }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const retrospectiveId = Number(query[1]);
  const teamId = Number(query[3]);
  const navigate = useNavigate();
  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 7, margin: '20px 10px' }}>
          <div style={{ display: 'flex' }}>
            <MdPeopleAlt size="40px" color="#434343" style={{ margin: 'auto 0' }} />

            <S.TitleText>{name}</S.TitleText>
          </div>

          <S.SubTitleText>
            첫 회고 진행 - 앞으로 남은 회고는 2번! <br />
          </S.SubTitleText>
        </div>

        <S.SaveSettingBox style={{ flex: 1 }}>
          <S.SaveButton>SAVE</S.SaveButton>
          <S.SettingButton
            id="wr_edit"
            onClick={() => {
              navigate(`/revise?retrospectiveId=${retrospectiveId}&teamId=${teamId}`);
            }}
          >
            <IoIosMore size={'40px'} color="#B1B2B2" />
          </S.SettingButton>
        </S.SaveSettingBox>
      </S.TitleBox>
    </>
  );
};

export default Title;
