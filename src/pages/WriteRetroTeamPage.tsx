import CheckPopUp from '@/components/writeRetro/CheckPopUp';
import SaveButton from '@/components/writeRetro/SaveButton';
import SubTitle from '@/components/writeRetro/SubTitle';
import Title from '@/components/writeRetro/Title';
import WriteRetroActionItems from '@/components/writeRetro/WriteRetroActionItems';
import WriteRetroToImprove from '@/components/writeRetro/WriteRetroToImprove';
import WriteRetroWentWell from '@/components/writeRetro/WriteRetroWentWell';

function WriteRetroTeamPage() {
  return (
    <>
      <Title title="First Retro"></Title>
      <SubTitle subTitle="첫 회고 진행 - 앞으로 남은 회고는 2번!"></SubTitle>
      <SaveButton></SaveButton>
      <CheckPopUp></CheckPopUp>
      <WriteRetroWentWell></WriteRetroWentWell>
      <WriteRetroToImprove></WriteRetroToImprove>
      <WriteRetroActionItems></WriteRetroActionItems>
    </>
  );
}

export default WriteRetroTeamPage;
