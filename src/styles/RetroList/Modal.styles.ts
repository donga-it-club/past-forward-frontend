import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;
export const CloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 10px;
  padding-bottom: 10px;
  margin-top: 0;
`;

export const CloseImg = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

export const Text = styled.span`
  color: #111b47;
`;
