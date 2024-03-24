import { ModalBody } from '@chakra-ui/react';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredModalBody = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;
