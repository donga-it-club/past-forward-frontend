import React, { useState, useEffect } from 'react';

import { Checkbox, Stack, Input, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/PurposeCheckbox.style';

interface Purpose {
  onPurposeChange: (purpose: string[]) => void;
}

const PurposeCheckbox: React.FC<Purpose> = ({ onPurposeChange }) => {
  const [checkedPurposes, setCheckedPurposes] = useState<string[]>([]);
  const [otherPurpose, setOtherPurpose] = useState<string>('');
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);

  useEffect(() => {
    const updatedPurposes = [...checkedPurposes];
    if (isOtherSelected) {
      updatedPurposes.push(otherPurpose);
    }
    onPurposeChange(updatedPurposes);
  }, [checkedPurposes, otherPurpose, isOtherSelected, onPurposeChange]);

  // purposes

  const handlePurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const purpose = event.target.value;
    let updatedPurposes: string[];

    if (isChecked) {
      updatedPurposes = [...checkedPurposes, purpose];
    } else {
      updatedPurposes = checkedPurposes.filter(item => item !== purpose);
    }

    setCheckedPurposes(updatedPurposes);
  };

  // otherPurpose
  const handleOtherPurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOtherPurpose = event.target.value;
    setOtherPurpose(newOtherPurpose);
    setIsOtherSelected(!!newOtherPurpose);
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">Past-Forward 서비스를 어떤 목적으로 사용하려 하십니까?</Text>
        <Text>(복수 선택 가능)</Text>
        <S.CheckboxContainer>
          <Stack direction="column" spacing={6}>
            <Stack direction="row" spacing={3}>
              <Checkbox
                style={{ wordBreak: 'keep-all' }}
                value="업무 목적"
                colorScheme="brand"
                onChange={handlePurposeChange}
              >
                업무 목적
              </Checkbox>
              <Checkbox
                style={{ wordBreak: 'keep-all' }}
                value="개인 발전"
                colorScheme="brand"
                onChange={handlePurposeChange}
              >
                개인 발전
              </Checkbox>
              <Checkbox
                style={{ wordBreak: 'keep-all' }}
                value="팀 협업"
                colorScheme="brand"
                onChange={handlePurposeChange}
              >
                팀 협업
              </Checkbox>
              <Checkbox
                style={{ wordBreak: 'keep-all' }}
                value="프로젝트 관리"
                colorScheme="brand"
                onChange={handlePurposeChange}
              >
                프로젝트 관리
              </Checkbox>
              <Checkbox
                style={{ wordBreak: 'keep-all' }}
                value="학습 및 개선"
                colorScheme="brand"
                onChange={handlePurposeChange}
              >
                학습 및 개선
              </Checkbox>
            </Stack>
            <Stack direction="row">
              <Checkbox colorScheme="brand" isChecked={isOtherSelected}>
                기타
              </Checkbox>

              <Input
                width="20rem"
                placeholder="직접 입력해주세요."
                value={otherPurpose}
                onChange={handleOtherPurposeChange}
              />
            </Stack>
          </Stack>
        </S.CheckboxContainer>
      </S.CustomContainer>
    </>
  );
};

export default PurposeCheckbox;
