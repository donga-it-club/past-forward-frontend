import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Input, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/PathRadio.style';

interface Path {
  onPathChange: (path: string) => void;
}

const PathRadio: React.FC<Path> = ({ onPathChange }) => {
  const [path, setPath] = useState<string>('블라인드');
  const [inputValue, setInputValue] = useState<string>(''); // 입력값 상태 추가

  const handlePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPath = event.target.value;
    setPath(newPath);
    onPathChange(newPath);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setPath('기타'); // 입력값이 변할 때, 경로를 '기타'로 설정
    onPathChange(event.target.value); // 경로를 '기타'로 설정
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">Past-Forward 서비스를 알게 된 경로는 무엇입니까?</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setPath} value={path}>
            <Stack direction="column" spacing={6}>
              <Stack direction="row" spacing={3}>
                <Radio colorScheme="brand" value="블라인드" onChange={handlePathChange}>
                  블라인드
                </Radio>
                <Radio colorScheme="brand" value="에브리타임" onChange={handlePathChange}>
                  에브리타임
                </Radio>
                <Radio colorScheme="brand" value="카카오톡" onChange={handlePathChange}>
                  카카오톡
                </Radio>
                <Radio colorScheme="brand" value="인스타그램" onChange={handlePathChange}>
                  인스타그램
                </Radio>
                <Radio colorScheme="brand" value="슬랙" onChange={handlePathChange}>
                  슬랙
                </Radio>
              </Stack>
              <Stack direction="row">
                <Radio colorScheme="brand" value="기타" onChange={handlePathChange}>
                  기타
                </Radio>
                <Input
                  width="20rem"
                  placeholder="직접 입력해주세요."
                  value={inputValue} // 입력값 상태를 value로 사용
                  onChange={handleInputChange} // 입력값 변경 핸들러 추가
                />
              </Stack>
            </Stack>
          </RadioGroup>
        </S.RadioContainer>
      </S.CustomContainer>
    </>
  );
};

export default PathRadio;
