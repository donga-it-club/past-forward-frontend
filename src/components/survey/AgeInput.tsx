import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react';
import * as S from '@/styles/survey/AgeInput.style';

const AgeInput: React.FC = () => {
  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하의 연령은 어떻게 되십니까?</Text>
        <S.CustomInput>
          <Text>만</Text>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text>세</Text>
        </S.CustomInput>
      </S.CustomContainer>
    </>
  );
};

export default AgeInput;
