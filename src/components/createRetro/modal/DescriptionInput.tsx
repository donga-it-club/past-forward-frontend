import React from 'react';
import { Input } from '@chakra-ui/react';

const DescriptionInput: React.FC = () => {
  return (
    <>
      <Input placeholder="회고에 대한 설명을 입력해주세요." variant="flushed"></Input>
    </>
  );
};

export default DescriptionInput;
