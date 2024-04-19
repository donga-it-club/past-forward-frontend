import { ModalBody } from '@chakra-ui/react';
import styled from 'styled-components';

// export const CustomModalContent = styled(ModalContent)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const CustomModalBody = styled(ModalBody)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BottomModalBody = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 2rem;
`;
