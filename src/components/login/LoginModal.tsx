import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Text,
  Link,
} from '@chakra-ui/react';
import EmailInput from '@/components/login/EmailInput';
import GoogleLoginButton from '@/components/login/GoogleLoginButton';
import KakaoLoginButton from '@/components/login/KakaoLoginButton';
import LoginButton from '@/components/login/LoginButton';
import PasswordInput from '@/components/login/PasswordInput';
import * as S from '@/styles/login/LoginModal.style';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const size = 'xl';

  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <S.Header>
            <img src="/logo.svg" />
            <Text>Past Forward</Text>
          </S.Header>
        </ModalHeader>
        <ModalCloseButton />

        <S.CenteredModalBody>
          <Text>로그인 하기</Text>
          <EmailInput />
          <PasswordInput />
          <Text style={{ marginTop: '1rem' }}>소셜 로그인 하기</Text>
          <KakaoLoginButton />
          <GoogleLoginButton />
          <LoginButton />
        </S.CenteredModalBody>

        <ModalFooter>
          <Text style={{ marginBottom: '1rem' }}>
            계정이 없으신가요?{' '}
            <Link color="teal.500" href="#">
              무료 가입
            </Link>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
