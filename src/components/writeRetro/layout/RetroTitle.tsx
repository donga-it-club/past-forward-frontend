import { FC } from 'react';
import { IoPerson } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  teamId: number | null;
  name: string;
}

const RetroTitle: FC<Props> = ({ teamId, name }) => {
  return (
    <>
      <S.RetroTitleBox>
        <div style={{ width: '40px', height: '40px', position: 'relative', top: '2px' }}>
          {teamId ? (
            //  <MdPeopleAlt size="40px" color="#434343" style={{  margin: 'auto 0' }} />
            <MdPeopleAlt color="#434343" style={{ width: '40px', height: '40px', margin: 'auto 0' }} />
          ) : (
            <IoPerson color="#434343" style={{ width: '40px', height: '40px', margin: 'auto 0' }} />
          )}
        </div>
        <S.TitleText>{name}</S.TitleText>
      </S.RetroTitleBox>
    </>
  );
};

export default RetroTitle;
