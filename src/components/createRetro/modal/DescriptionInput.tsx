import React from 'react';
import { Input } from '@chakra-ui/react';

interface DescriptionInputProps {
  onChange: (description: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ onChange }) => {
  return (
    <>
      <Input
        placeholder="회고에 대한 설명을 입력해 주세요."
        variant="flushed"
        onChange={e => onChange(e.target.value)}
      ></Input>
    </>
  );
};

export default DescriptionInput;
