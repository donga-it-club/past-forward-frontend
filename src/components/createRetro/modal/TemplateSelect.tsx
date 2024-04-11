import React from 'react';
import { Select } from '@chakra-ui/react';

const TemplateSelect: React.FC<{ onChange: (templateId: number) => void }> = ({ onChange }) => {
  return (
    <>
      <div>Template</div>
      <Select placeholder="Select option" onChange={e => onChange(Number(e.target.value))}>
        <option value="1">KUDOS ver</option>
        <option value="2">KPT ver</option>
      </Select>
    </>
  );
};

export default TemplateSelect;
