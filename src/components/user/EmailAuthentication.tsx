import React from 'react';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

const EmailAuthentication: React.FC = () => {
  return (
    <FormControl isRequired>
      <FormLabel>First name</FormLabel>
      <Input placeholder="First name" />
    </FormControl>
  );
};

export default EmailAuthentication;
