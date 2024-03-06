import React, { useState } from 'react';
import styled from 'styled-components';

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 30%;
  background-color: white;
  border-radius: 0.3rem;
  padding: 1.3rem 1.6rem;
  cursor: pointer;
`;

const Select = styled.div<{ istemplateselected: boolean }>`
  color: ${props => (props.istemplateselected ? 'black' : 'gray')};
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  @keyframes dropdown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.4s ease;
`;

const Option = styled.button`
  background-color: white;
  height: 3rem;
  border-radius: 0.3rem;
  width: 30%;

  &:hover {
    background-color: rgba(243, 243, 243, 1);
    cursor: pointer;
  }
`;

const TemplateDropdown: React.FC = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  const templates = ['KUDOS ver', 'KPT ver'];

  // Option 요소들 생성
  const optionElements = templates.map((template, index) => (
    <Option key={index} onClick={() => handleTemplateSelect(template)}>
      {template}
    </Option>
  ));

  // 템플릿 선택 시 처리 함수
  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setIsDropDown(false);
  };

  return (
    <>
      <SelectButton type="button" onClick={onClickSelect}>
        <Select istemplateselected={selectedTemplate !== ''}>
          {selectedTemplate === '' ? '(나중에 디폴트 템플릿으로 변경)' : selectedTemplate}
        </Select>
      </SelectButton>
      {isDropDown && <DropDown>{optionElements}</DropDown>}
    </>
  );
};

export default TemplateDropdown;
