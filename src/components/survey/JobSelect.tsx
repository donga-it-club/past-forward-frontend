import React, { useState } from 'react';
import { Select, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/JobSelect.style';

interface Job {
  onJobChange: (job: string) => void;
}

const JobSelect: React.FC<Job> = ({ onJobChange }) => {
  const [job, setJob] = useState<string>('');
  const handleJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newJob = event.target.value;
    setJob(newJob);
    onJobChange(newJob);
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하의 현재 직업은 무엇입니까?</Text>
        <S.SelectContainer>
          <Select placeholder="Select option" onChange={handleJobChange} value={job}>
            <option value="대학생(원)">대학생(원)</option>
            <option value="무직">무직</option>
            <option value="경영">경영 · 비지니스</option>
            <option value="마케팅">마케팅 · 광고</option>
            <option value="디자인">디자인</option>
            <option value="영업">영업</option>
            <option value="고객서비스">고객서비스 · 리테일</option>
            <option value="미디어">미디어</option>
            <option value="엔지니어링">엔지니어링 · 설계</option>
            <option value="HR">HR</option>
            <option value="게임제작">게임 제작</option>
            <option value="금융">금융</option>
            <option value="제조">제조 · 생산</option>
            <option value="의료">의료 · 제약 · 바이오</option>
            <option value="물류무역">물류무역</option>
            <option value="법률">법률 · 법집행기관</option>
            <option value="식음료">식 · 음료</option>
            <option value="건설">건설 · 시설</option>
            <option value="공공">공공 · 복지</option>
          </Select>
        </S.SelectContainer>
      </S.CustomContainer>
    </>
  );
};

export default JobSelect;
