import { Kudos, WentWell, ToImprove, ActionItems, Title, SaveSetting } from '@/components/writeRetro/layout/Layout';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const WriteRetroTeamPage = () => {
  return (
    <>
      <Title></Title>
      <SaveSetting></SaveSetting>
      <S.SectionBox>
        <Kudos></Kudos>
        <WentWell></WentWell>
        <ToImprove></ToImprove>
        <ActionItems></ActionItems>
      </S.SectionBox>
    </>
  );
};
