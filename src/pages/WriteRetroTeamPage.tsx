import CheckPopUp from '../components/writeRetro/CheckPopUp';
import SaveButton from '../components/writeRetro/SaveButton';
import Title from '../components/writeRetro/Title';
import WriteRetroActionItems from '../components/writeRetro/WriteRetroActionItems';
import WriteRetroKudos from '../components/writeRetro/WriteRetroKudos';
import WriteRetroToImprove from '../components/writeRetro/WriteRetroToImprove';
import WriteRetroWentWell from '../components/writeRetro/WriteRetroWentWell';

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
