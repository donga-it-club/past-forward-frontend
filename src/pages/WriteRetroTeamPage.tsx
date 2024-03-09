import WriteRetroTitle from '../components/writeRetro/WriteRetroTitle';
import WriteRetroKudos from '../components/writeRetro/WriteRetroKudos';
import WriteRetroWentWell from '../components/writeRetro/WriteRetroWentWell';
import WriteRetroToImprove from '../components/writeRetro/WriteRetroToImprove';
import WriteRetroActionItems from '../components/writeRetro/WriteRetroActionItems';
import SaveButton from '../components/writeRetro/SaveButton';
import CheckPopUp from '../components/writeRetro/CheckPopUp';

function WriteRetroTeamPage() {
  return (
    <>
      <WriteRetroTitle title="First Retro"></WriteRetroTitle>
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
