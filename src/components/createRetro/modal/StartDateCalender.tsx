import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '@/styles/createRetro/modal/StartDateCalendar.style';
import '@/styles/createRetro/modal/Calendar.css';
import { ko } from 'date-fns/locale/ko';

const StartDateCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <div>Start Date</div>
      <S.DateInput
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
      />
    </>
  );
};

export default StartDateCalendar;
