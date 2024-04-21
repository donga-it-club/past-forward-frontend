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
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Text,
} from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import { GetInviteTeamResponse, InviteTeamData } from '@/api/@types/InviteTeam';
import getInviteTeam from '@/api/inviteTeamApi/getInviteTeam';
import * as S from '@/styles/inviteTeam/InviteTeamModal.style';

interface InviteTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: number;
}

const InviteTeamModal: React.FC<InviteTeamModalProps> = ({ isOpen, onClose, teamId }) => {
  const [inviteData, setInviteData] = useState<InviteTeamData | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const size = 'xl';

  useEffect(() => {
    const fetchInviteData = async () => {
      try {
        const response: GetInviteTeamResponse = await getInviteTeam(teamId);
        setInviteData(response.data);
      } catch (error) {
        console.error('팀원 초대 get 실패', error);
      }
    };

    fetchInviteData();
  }, []);

  const generateInvitationUrl = (invitationCode: string) => {
    // const domain = 'http://localhost:3000'; // 로컬 테스트용
    const domain = 'https://www.pastforward.link'; // 배포용
    return `${domain}/invitations?invitationId=${invitationCode}`;
  };

  const copyToClipboard = () => {
    if (inviteData) {
      // inviteData가 null이 아닐 때만 실행
      const invitationUrl = generateInvitationUrl(inviteData.invitationCode);
      navigator.clipboard.writeText(invitationUrl).then(
        () => {
          setShowAlert(true); // 알림 표시
        },
        err => {
          console.error('링크 복사 실패', err);
        },
      );
    } else {
      console.error('null일 때');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Invite team members</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {inviteData && (
            <S.CustomModalBody>
              <QRCode value={generateInvitationUrl(inviteData.invitationCode)} />
              <S.LinkContainer>
                <Text fontSize="sm">QR과 Link를 통해 팀원을 초대하여 회고를 함께하세요!</Text>
                <S.LinkBox>
                  <Input value={generateInvitationUrl(inviteData.invitationCode)} isReadOnly />
                  <Button
                    onClick={copyToClipboard}
                    colorScheme="brand"
                    leftIcon={<FaCopy />}
                    marginLeft="0.2rem"
                    id="inv_url"
                  >
                    Copy
                  </Button>
                </S.LinkBox>
              </S.LinkContainer>
            </S.CustomModalBody>
          )}
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
