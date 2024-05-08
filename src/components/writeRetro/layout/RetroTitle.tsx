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
      {teamId ? (
        <MdPeopleAlt size="40px" color="#434343" style={{ margin: 'auto 0' }} />
      ) : (
        <IoPerson size="40px" color="#434343" style={{ margin: 'auto 0' }} />
      )}

      <S.TitleText>{name}</S.TitleText>
    </>
  );
};

export default RetroTitle;
