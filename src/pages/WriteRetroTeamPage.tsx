import Title from '../components/writeRetro/Title';
import WriteRetroKudos from '../components/writeRetro/WriteRetroKudos';
import WriteRetroWentWell from '../components/writeRetro/WriteRetroWentWell';
import WriteRetroToImprove from '../components/writeRetro/WriteRetroToImprove';
import WriteRetroActionItems from '../components/writeRetro/WriteRetroActionItems';
import SaveButton from '../components/writeRetro/SaveButton';
import CheckPopUp from '../components/writeRetro/CheckPopUp';

function WriteRetroTeamPage() {
  return (
    <>
      <Title title="First Retro"></Title>
      <SaveButton></SaveButton>
      <CheckPopUp></CheckPopUp>
      <WriteRetroKudos></WriteRetroKudos>
      <WriteRetroWentWell></WriteRetroWentWell>
      <WriteRetroToImprove></WriteRetroToImprove>
      <WriteRetroActionItems></WriteRetroActionItems>
    </>
  );
}

export default WriteRetroTeamPage;
