import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const IndicatorSeparator = null;
const customComponents = { IndicatorSeparator };

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? 'transparent' : provided.borderColor,
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
  }),
};

const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    /* border: none; */
    display: flex;
    text-align: center;
    color: black;
    cursor: pointer;
  }
  .react-select__menu {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    text-align: center;
  }
  .react-select__option {
    background-color: transparent; /* option 배경색 */
    color: black; /* option 텍스트 색상 */
  }
  .react-select__option--is-selected {
    background-color: rgba(243, 243, 243, 1); /* 클릭된 option 배경색 */
    color: black; /* 클릭된 option 텍스트 색상 */
  }
  .react-select__option--is-focused {
    background-color: rgba(243, 243, 243, 1);
    color: black; /* hover 상태의 option 텍스트 색상 */
  }
  .react-select__placeholder {
    font-weight: 600;
  }
`;

const options = [
  { value: 'KUDOS', label: 'KUDOS ver' },
  { value: 'KPT', label: 'KPT ver' },
];

const TemlplateSelect: React.FC = () => {
  return (
    <>
      <StyledSelect
        className="basic-single"
        classNamePrefix="select"
        name="select"
        options={options}
        defaultValue="나중에 받아올 예정"
      />
    </>
  );
};

export default TemlplateSelect;
