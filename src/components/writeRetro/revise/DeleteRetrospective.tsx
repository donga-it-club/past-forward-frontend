import { FC } from 'react';
import { IoIosInformationCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  Portal,
  Flex,
} from '@chakra-ui/react';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as L from '@/styles/writeRetroStyles/Layout.style';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

interface Props {
  retrospectiveId: number;
}

const DeleteRetrospective: FC<Props> = ({ retrospectiveId }) => {
  const toast = useCustomToast();
  const navigate = useNavigate();
  const handleDeleteRetrospective = async () => {
    try {
      await RetrospectiveService.delete({ retrospectiveId: retrospectiveId });
      navigate('/retrolist');
      toast.info('회고가 삭제되었습니다.');
    } catch (e) {
      toast.error(e);
    }
  };
  return (
    <>
      <L.reviseTitleText>회고 삭제</L.reviseTitleText>
      <S.SettingLine />
      <Flex margin="20px 10px">
        <IoIosInformationCircle color="#FF4646" size={20} style={{ margin: 'auto 0' }} />
        <S.SettingDetailText>삭제 후 복구할 수 없습니다.</S.SettingDetailText>
      </Flex>
      <Flex flexDirection="row-reverse" margin="30px">
        <Popover>
          <PopoverTrigger>
            <Button colorScheme="red" variant="outline">
              회고 삭제
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverBody margin="0 auto">회고를 정말 삭제하시겠습니까?</PopoverBody>
              <PopoverFooter display="flex" flexDirection="row-reverse" margin="0 auto">
                <Button colorScheme="red" onClick={handleDeleteRetrospective}>
                  네
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>
    </>
  );
};

export default DeleteRetrospective;
