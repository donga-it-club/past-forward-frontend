import React, { useState } from 'react';
import { Checkbox, Stack, Input, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/PurposeCheckbox.style';

interface Purpose {
  onPurposeChange: (purpose: string) => void;
  onOtherPurposeChange: (otherPurpose: string) => void;
  // onPurposeChange: (purpose: string[]) => void;
}

const PurposeCheckbox: React.FC<Purpose> = ({ onPurposeChange, onOtherPurposeChange }) => {
  const [checkedPurposes, setCheckedPurposes] = useState<string[]>([]);

  const handlePurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const purpose = event.target.value;
    let updatedPurposes: string[];

    if (isChecked) {
      updatedPurposes = [...checkedPurposes, purpose]; // 체크된 경우 배열에 추가
    } else {
      updatedPurposes = checkedPurposes.filter(item => item !== purpose); // 체크 해제된 경우 배열에서 제거
    }

    setCheckedPurposes(updatedPurposes); // 최종 업데이트 한번만 수행
    onPurposeChange(updatedPurposes.join(', ')); // 선택된 목적들을 문자열로 변환하여 전달
  };

  const [otherPurpose, setOtherPurpose] = useState<string>('');
  const handleOtherPurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOtherPurpose = event.target.value;
    setOtherPurpose(newOtherPurpose);
    onOtherPurposeChange(newOtherPurpose);
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">Past-Forward 서비스를 알게 된 경로는 무엇입니까?</Text>
        <Text>(복수 선택 가능)</Text>
        <S.CheckboxContainer>
          <Stack direction="column" spacing={6}>
            <Stack direction="row" spacing={3}>
              <Checkbox value="업무 목적" colorScheme="brand" onChange={handlePurposeChange}>
                업무 목적
              </Checkbox>
              <Checkbox value="개인 발전" colorScheme="brand" onChange={handlePurposeChange}>
                개인 발전
              </Checkbox>
              <Checkbox value="팀 협업" colorScheme="brand" onChange={handlePurposeChange}>
                팀 협업
              </Checkbox>
              <Checkbox value="프로젝트 관리" colorScheme="brand" onChange={handlePurposeChange}>
                프로젝트 관리
              </Checkbox>
              <Checkbox value="학습 및 개선" colorScheme="brand" onChange={handlePurposeChange}>
                학습 및 개선
              </Checkbox>
            </Stack>
            <Stack direction="row">
              <Checkbox colorScheme="brand">기타</Checkbox>
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

// import React from 'react';
// import { Checkbox, Stack, Input, Text } from '@chakra-ui/react';
// import * as S from '@/styles/survey/PurposeCheckbox.style';

// interface Purpose {
//   onPurposeChange: (city: string) => void;
// }

// const PurposeCheckbox: React.FC<Purpose> = ({ onPurposeChange }) => {
//   const [purpose, setPurpose] = useState<string>('서울');
//   const handlePurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newPurpose = event.target.value;
//     setPurpose(newPurpose);
//     onPurposeChange(newPurpose);
//   };

//   return (
//     <>
//       <S.CustomContainer>
//         <Text fontSize="lg">Past-Forward 서비스를 알게 된 경로는 무엇입니까?</Text>
//         <Text>(복수 선택 가능)</Text>
//         <S.CheckboxContainer>
//           <Stack direction="column" spacing={6}>
//             <Stack direction="row" spacing={3}>
//               <Checkbox colorScheme="brand">업무 목적</Checkbox>
//               <Checkbox colorScheme="brand">개인 발전</Checkbox>
//               <Checkbox colorScheme="brand">팀 협업</Checkbox>
//               <Checkbox colorScheme="brand">프로젝트 관리</Checkbox>
//               <Checkbox colorScheme="brand">학습 및 개선</Checkbox>
//             </Stack>
//             <Stack direction="row">
//               <Checkbox colorScheme="brand">기타</Checkbox>
//               <Input width="20rem" placeholder="직접 입력해주세요." />
//             </Stack>
//           </Stack>
//         </S.CheckboxContainer>
//       </S.CustomContainer>
//     </>
//   );
// };
