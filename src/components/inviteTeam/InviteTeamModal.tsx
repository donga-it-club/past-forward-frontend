import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Text,
} from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import * as S from '@/styles/inviteTeam/InviteTeamModal.style';

const InviteTeamModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inviteLink = 'https://past-forward.com/invite'; // 초대 링크 설정
  const [showAlert, setShowAlert] = useState(false);
  const size = 'xl';

  const [timeLeft, setTimeLeft] = useState('');
  const expireDate = new Date(new Date().getTime() + 60 * 60 * 1000);

  useEffect(() => {
    onOpen();
    // 만료까지 남은 시간을 계산하는 함수 -> 나중에 api 연결시 수정
    const calculateTimeLeft = () => {
      const now = new Date();
      // getTime() 메서드를 사용하여 Date 객체를 밀리초 단위의 숫자로 변환
      const difference = expireDate.getTime() - now.getTime();
      let timeLeft = '';

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        timeLeft = `링크 만료까지 ${hours}시간 ${minutes}분 ${seconds}초`;
      }

      return timeLeft;
    };

    // 1초마다 시간 업데이트
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // 시간이 만료되면 타이머 멈춤
      if (newTimeLeft === '') clearInterval(timer);
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, [onOpen, expireDate]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(
      () => {
        setShowAlert(true); // 알림 표시
        // setTimeout(() => setShowAlert(false), 3000);
      },
      err => {
        console.error('링크를 복사하는데 실패했습니다.', err);
      },
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Invite team members</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <S.CustomModalBody>
            <QRCode value={inviteLink} />
            <S.LinkContainer>
              <Text fontSize="sm">QR과 Link를 통해 팀원을 초대하여 회고를 함께하세요!</Text>
              <S.LinkBox>
                <Input value={inviteLink} isReadOnly />
                <Button onClick={copyToClipboard} colorScheme="brand" leftIcon={<FaCopy />} marginLeft="0.2rem">
                  Copy
                </Button>
              </S.LinkBox>
              <Text fontSize="sm">{timeLeft}</Text>
            </S.LinkContainer>
          </S.CustomModalBody>
        </ModalBody>
        <ModalFooter>
          {showAlert && (
            <Alert status="success" mt="3" mb="4">
              <AlertIcon />
              <AlertTitle mr={2}>링크 복사됨!</AlertTitle>
              <AlertDescription>클립보드에 링크가 복사되었습니다.</AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowAlert(false)} />
            </Alert>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InviteTeamModal;
