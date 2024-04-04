import { Title, SaveSetting, Keep, Problem, Try, PersonalActionItems } from '@/components/writeRetro/layout/Layout';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const WriteRetroPersonalPage = () => {
  return (
    <>
      <Title></Title>
      <SaveSetting></SaveSetting>
      <S.SectionBox>
        <Keep></Keep>
        <Problem></Problem>
        <Try></Try>
        <PersonalActionItems></PersonalActionItems>
      </S.SectionBox>
    </>
  );
};
