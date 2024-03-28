import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/GenderRadio.style';

const GenderRadio: React.FC = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하의 성별은 어떻게 되십니까?</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio colorScheme="brand" value="1">
                여성
              </Radio>
              <Radio colorScheme="brand" value="2">
                남성
              </Radio>
            </Stack>
          </RadioGroup>
        </S.RadioContainer>
      </S.CustomContainer>
    </>
  );
};

export default GenderRadio;
