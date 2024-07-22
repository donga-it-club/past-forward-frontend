import { useState } from 'react';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/EmailConsents.style';

interface EmailConsentsProps {
  onEmailConsentsChange: (emailConsents: boolean) => void;
}

export const EmailConsents: React.FC<EmailConsentsProps> = ({ onEmailConsentsChange }) => {
  const [emailConsents, setEmailConsents] = useState<string>('');
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailConsents = event.target.value;
    const emailConsentsChoose = emailConsents === 'false' ? false : true;
    setEmailConsents(emailConsents);
    onEmailConsentsChange(emailConsentsChoose);
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">이메일 마케팅 수신 동의 (선택)</Text>
        <Text fontSize="sm">Past Forward 관련 뉴스, 업데이트 및 회고 알림 등을 포함합니다.</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setEmailConsents} value={emailConsents}>
            <Stack direction="row" spacing={6}>
              <Radio id="survey_emailConsents_1" colorScheme="brand" value="true" onChange={handleCityChange}>
                수신함
              </Radio>
              <Radio id="survey_emailConsents_2" colorScheme="brand" value="false" onChange={handleCityChange}>
                수신하지 않음
              </Radio>
            </Stack>
          </RadioGroup>
        </S.RadioContainer>
      </S.CustomContainer>
    </>
  );
};
