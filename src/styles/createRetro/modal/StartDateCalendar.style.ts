import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const DateInput = styled(DatePicker)`
  width: 100%;
  height: 38px;
  border: 1px #2d3748 solid;
  border-radius: 6px;
  padding-left: 1rem;

  &:hover {
    border: 1px #e2e8f0 solid;
  }
`;
