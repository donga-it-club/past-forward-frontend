import React, { useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react';
import * as S from '@/styles/survey/AgeInput.style';

interface Age {
  onAgeChange: (age: string) => void;
}

const AgeInput: React.FC<Age> = ({ onAgeChange }) => {
  const [age, setAge] = useState<string>('');

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setAge(newAge);
    onAgeChange(newAge);
  };

  const handleIncrement = () => {
    const incrementedAge = parseInt(age) + 1;
    setAge(String(incrementedAge));
    onAgeChange(String(incrementedAge));
  };

  const handleDecrement = () => {
    const decrementedAge = parseInt(age) - 1;
    setAge(String(decrementedAge));
    onAgeChange(String(decrementedAge));
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하의 연령은 어떻게 되십니까?</Text>
        <S.CustomInput>
          <Text>만</Text>
          <NumberInput>
            <NumberInputField value={age} onChange={handleAgeChange} />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={handleIncrement} />
              <NumberDecrementStepper onClick={handleDecrement} />
            </NumberInputStepper>
          </NumberInput>
          <Text>세</Text>
        </S.CustomInput>
      </S.CustomContainer>
    </>
  );
};

export default AgeInput;
