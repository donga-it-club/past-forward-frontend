import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/CityRadio.style';

const CityRadio: React.FC = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하가 현재 거주하는 지역은 무엇입니까?</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column" spacing={10}>
              <Stack direction="row" spacing={6}>
                <Radio colorScheme="brand" value="1">
                  서울
                </Radio>
                <Radio colorScheme="brand" value="2">
                  경기
                </Radio>
                <Radio colorScheme="brand" value="3">
                  인천
                </Radio>
                <Radio colorScheme="brand" value="4">
                  대전
                </Radio>
                <Radio colorScheme="brand" value="5">
                  세종
                </Radio>
                <Radio colorScheme="brand" value="6">
                  충남
                </Radio>
              </Stack>
              <Stack direction="row" spacing={6}>
                <Radio colorScheme="brand" value="7">
                  충북
                </Radio>
                <Radio colorScheme="brand" value="8">
                  광주
                </Radio>

                <Radio colorScheme="brand" value="9">
                  전남
                </Radio>
                <Radio colorScheme="brand" value="10">
                  전북
                </Radio>
                <Radio colorScheme="brand" value="11">
                  대구
                </Radio>
                <Radio colorScheme="brand" value="12">
                  경북
                </Radio>
              </Stack>
              <Stack direction="row" spacing={6}>
                <Radio colorScheme="brand" value="13">
                  부산
                </Radio>
                <Radio colorScheme="brand" value="14">
                  울산
                </Radio>
                <Radio colorScheme="brand" value="15">
                  경남
                </Radio>
                <Radio colorScheme="brand" value="16">
                  강원
                </Radio>
                <Radio colorScheme="brand" value="17">
                  제주
                </Radio>
                <Radio colorScheme="brand" value="18">
                  해외
                </Radio>
              </Stack>
            </Stack>
          </RadioGroup>
        </S.RadioContainer>
      </S.CustomContainer>
    </>
  );
};

export default CityRadio;
