import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale/ko';
import * as S from '@/styles/createRetro/modal/StartDateCalendar.style';
import '@/styles/createRetro/modal/Calendar.css';

const StartDateCalendar: React.FC<{ onChange: (startedDate: string) => void }> = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date ? date.toISOString() : ''); // ISO 8601 형식으로 변환
  };

  const formatDateForDisplay = (date: Date | null) => {
    return date ? date.toLocaleDateString('ko-KR') : ''; // 화면에 보여질 형식은 지역화된 날짜 형식을 사용합니다.
  };

  return (
    <>
      <div>Start Date</div>
      <S.DateInput
        selected={selectedDate}
        onChange={handleDateChange}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
        value={formatDateForDisplay(selectedDate)}
      />
    </>
  );
};

export default StartDateCalendar;
