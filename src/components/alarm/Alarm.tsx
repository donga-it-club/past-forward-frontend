import { useEffect, useState } from 'react';
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
import { NotificationData } from '@/api/@types/Notification';
import { NotificationServices } from '@/api/services/Notification';
import * as S from '@/styles/layout/layout.style';

const Alarm = () => {
  const [notification, setNotification] = useState<NotificationData[]>();
  const fetchNotification = async () => {
    try {
      const data = await NotificationServices.get();
      setNotification(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchNotification();
  });
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
            {/* <S.MenuText>오늘 받은 알림</S.MenuText> */}
            {notification ? (
              notification.map(item => (
                <S.AlarmContents>
                  {item.senderName}님이 {item.retrospectiveTitle}에 댓글을 작성했습니다.
                </S.AlarmContents>
              ))
            ) : (
              <S.MenuText>알림 없음</S.MenuText>
            )}

            {/* <S.MenuText>어제 받은 알림</S.MenuText>
            <S.AlarmContents>이채연님이 회고보드에 댓글을 작성했습니다 </S.AlarmContents> */}
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Alarm;
