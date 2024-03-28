import React from 'react';
import { Text, Button, Divider } from '@chakra-ui/react';
import AgeInput from '@/components/survey/AgeInput';
import CityRadio from '@/components/survey/CityRadio';
import GenderRadio from '@/components/survey/GenderRadio';
import JobSelect from '@/components/survey/JobSelect';
import PathRadio from '@/components/survey/PathRadio';
import PurposeCheckbox from '@/components/survey/PurposeCheckbox';
import * as S from '@/styles/survey/SurveyPage.style';

const SurveyPage: React.FC = () => {
  return (
    <>
      <S.Background>
        <S.WhiteContainer>
          <Text fontSize="2xl" as="b" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
            설문조사
          </Text>
          <AgeInput />
          <Divider />
          <GenderRadio />
          <Divider />
          <JobSelect />
          <Divider />
          <CityRadio />
          <Divider />
          <PathRadio />
          <Divider />
          <PurposeCheckbox />
          <Button colorScheme="brand" width="80%" style={{ marginBottom: '4rem' }}>
            제출
          </Button>
        </S.WhiteContainer>
      </S.Background>
    </>
  );
};

export default SurveyPage;
