import React from 'react';
import { Select } from '@chakra-ui/react';

const TemlplateSelect: React.FC = () => {
  return (
    <>
      <div>Template</div>
      <Select placeholder="Select option">
        <option value="KUDOS">KUDOS ver</option>
        <option value="KPT">KPT ver</option>
      </Select>
    </>
  );
};

export default TemlplateSelect;
