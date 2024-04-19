import React from 'react';
import { Input } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/createRetro/modal/Calendar.css';

interface StartDateCalendarProps {
  onDateChange: (date: Date) => void;
}

const StartDateCalendar: React.FC<StartDateCalendarProps> = ({ onDateChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value; // 사용자가 입력한 날짜 문자열
    const selectedDate = new Date(dateString); // 문자열을 Date 객체로 변환
    onDateChange(selectedDate); // 부모 컴포넌트로 전달
  };

  return <Input placeholder="회고 시작일 선택" size="md" type="date" onChange={handleChange} />;
};

export default StartDateCalendar;
