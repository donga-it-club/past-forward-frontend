import React, { useState } from 'react';
import { ko } from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '@/styles/createRetro/modal/StartDateCalendar.style';
import '@/styles/createRetro/modal/Calendar.css';

interface StartDateCalendarProps {
  onDateChange: (dateString: string) => void;
}

const StartDateCalendar: React.FC<StartDateCalendarProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const isoDateString = date.toISOString(); // 백엔드 request body에 보낼 날짜 타입
    onDateChange(isoDateString);
  };

  return (
    <S.DateInput
      selected={selectedDate}
      onChange={handleDateChange}
      locale={ko}
      dateFormat="yyyy-MM-dd"
      showPopperArrow={false}
    />
  );
};

export default StartDateCalendar;
