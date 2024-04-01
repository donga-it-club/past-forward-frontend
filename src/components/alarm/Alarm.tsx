import { Bell, BellFill } from 'react-bootstrap-icons';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from '@chakra-ui/react';
import * as S from '@/styles/layout/layout.style';

const Alarm = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <S.IconStyle border-radius="50%">
          <Bell />
        </S.IconStyle>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            <BellFill style={{ fontSize: '30px' }} />
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <S.MenuText>알림</S.MenuText>
          </PopoverBody>
          <PopoverFooter>
            <S.MenuText>오늘 받은 알림</S.MenuText>
            <S.AlarmContents>이채연님이 회고보드에 댓글을 작성했습니다 </S.AlarmContents>

            <S.MenuText>어제 받은 알림</S.MenuText>
            <S.AlarmContents>이채연님이 회고보드에 댓글을 작성했습니다 </S.AlarmContents>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Alarm;
