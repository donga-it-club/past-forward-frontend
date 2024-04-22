import { FC } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  value: string;
  handleDeleteValue: () => void;
}

const DeleteData: FC<Props> = ({ value, handleDeleteValue }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <S.TaskRevise>삭제</S.TaskRevise>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader display="flex">
            <FaRegTrashAlt style={{ margin: 'auto 0', marginRight: '10px' }} />
            삭제요청
          </PopoverHeader>

          <PopoverBody>
            <S.DeleteSectionText>선택한 {value}를 삭제하시겠습니까?</S.DeleteSectionText>
            <Flex flexDirection="row-reverse">
              <Button colorScheme="brand" onClick={handleDeleteValue} margin="0 10px">
                <PopoverCloseButton hidden />
                삭제
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DeleteData;
