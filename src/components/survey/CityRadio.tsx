import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/CityRadio.style';

interface City {
  onCityChange: (city: string) => void;
}

const CityRadio: React.FC<City> = ({ onCityChange }) => {
  const [city, setCity] = useState<string>('서울');
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCity = event.target.value;
    setCity(newCity);
    onCityChange(newCity);
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하가 현재 거주하는 지역은 무엇입니까?</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setCity} value={city}>
            <Stack direction="column" spacing={10}>
              <Stack direction="row" spacing={6}>
                <Radio id="survey_region_1" colorScheme="brand" value="서울" onChange={handleCityChange}>
                  서울
                </Radio>
                <Radio id="survey_region_2" colorScheme="brand" value="경기" onChange={handleCityChange}>
                  경기
                </Radio>
                <Radio id="survey_region_3" colorScheme="brand" value="인천" onChange={handleCityChange}>
                  인천
                </Radio>
                <Radio id="survey_region_4" colorScheme="brand" value="대전" onChange={handleCityChange}>
                  대전
                </Radio>
                <Radio id="survey_region_5" colorScheme="brand" value="세종" onChange={handleCityChange}>
                  세종
                </Radio>
                <Radio id="survey_region_6" colorScheme="brand" value="충남" onChange={handleCityChange}>
                  충남
                </Radio>
              </Stack>
              <Stack direction="row" spacing={6}>
                <Radio id="survey_region_7" colorScheme="brand" value="충북" onChange={handleCityChange}>
                  충북
                </Radio>
                <Radio id="survey_region_8" colorScheme="brand" value="광주" onChange={handleCityChange}>
                  광주
                </Radio>

                <Radio id="survey_region_9" colorScheme="brand" value="전남" onChange={handleCityChange}>
                  전남
                </Radio>
                <Radio id="survey_region_10" colorScheme="brand" value="전북" onChange={handleCityChange}>
                  전북
                </Radio>
                <Radio id="survey_region_11" colorScheme="brand" value="대구" onChange={handleCityChange}>
                  대구
                </Radio>
                <Radio id="survey_region_12" colorScheme="brand" value="경북" onChange={handleCityChange}>
                  경북
                </Radio>
              </Stack>
              <Stack direction="row" spacing={6}>
                <Radio id="survey_region_13" colorScheme="brand" value="부산" onChange={handleCityChange}>
                  부산
                </Radio>
                <Radio id="survey_region_14" colorScheme="brand" value="울산" onChange={handleCityChange}>
                  울산
                </Radio>
                <Radio id="survey_region_15" colorScheme="brand" value="경남" onChange={handleCityChange}>
                  경남
                </Radio>
                <Radio id="survey_region_16" colorScheme="brand" value="강원" onChange={handleCityChange}>
                  강원
                </Radio>
                <Radio id="survey_region_17" colorScheme="brand" value="제주" onChange={handleCityChange}>
                  제주
                </Radio>
                <Radio id="survey_region_18" colorScheme="brand" value="해외" onChange={handleCityChange}>
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
