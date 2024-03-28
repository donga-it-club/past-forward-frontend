import React from 'react';
import { Checkbox, Stack, Input, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/PurposeCheckbox.style';

const PurposeCheckbox: React.FC = () => {
  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">Past-Forward 서비스를 알게 된 경로는 무엇입니까?</Text>
        <Text>(복수 선택 가능)</Text>
        <S.CheckboxContainer>
          <Stack direction="column" spacing={6}>
            <Stack direction="row" spacing={3}>
              <Checkbox colorScheme="brand">업무 목적</Checkbox>
              <Checkbox colorScheme="brand">개인 발전</Checkbox>
              <Checkbox colorScheme="brand">팀 협업</Checkbox>
              <Checkbox colorScheme="brand">프로젝트 관리</Checkbox>
              <Checkbox colorScheme="brand">학습 및 개선</Checkbox>
            </Stack>
            <Stack direction="row">
              <Checkbox colorScheme="brand">기타</Checkbox>
              <Input width="20rem" placeholder="직접 입력해주세요." />
            </Stack>
          </Stack>
        </S.CheckboxContainer>
      </S.CustomContainer>
    </>
  );
};

export default PurposeCheckbox;
