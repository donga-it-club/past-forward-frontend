import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Input, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/PathRadio.style';

const PathRadio: React.FC = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">Past-Forward 서비스를 알게 된 경로는 무엇입니까?</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column" spacing={6}>
              <Stack direction="row" spacing={3}>
                <Radio colorScheme="brand" value="1">
                  블라인드
                </Radio>
                <Radio colorScheme="brand" value="2">
                  에브리타임
                </Radio>
                <Radio colorScheme="brand" value="3">
                  카카오톡
                </Radio>
                <Radio colorScheme="brand" value="4">
                  인스타그램
                </Radio>
                <Radio colorScheme="brand" value="5">
                  슬랙
                </Radio>
              </Stack>
              <Stack direction="row">
                <Radio colorScheme="brand" value="6">
                  기타
                </Radio>
                <Input width="20rem" placeholder="직접 입력해주세요." />
              </Stack>
            </Stack>
          </RadioGroup>
        </S.RadioContainer>
      </S.CustomContainer>
    </>
  );
};

export default PathRadio;
