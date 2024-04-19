import React from 'react';
import { Input } from '@chakra-ui/react';

const TitleInput: React.FC<{ onChange: (title: string) => void }> = ({ onChange }) => {
  return (
    <>
      <Input placeholder="Retrospect Name" variant="flushed" onChange={e => onChange(e.target.value)}></Input>
    </>
  );
};

export default TitleInput;
