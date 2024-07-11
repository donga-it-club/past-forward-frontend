import { useEffect, useState } from 'react';
import { Bell, BellFill } from 'react-bootstrap-icons';
import { MdAccessAlarm } from 'react-icons/md';
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
  Flex,
} from '@chakra-ui/react';
import { convertToLocalTime } from '../RetroList/ContentsList';
import { NotificationData } from '@/api/@types/Notification';
import { NotificationServices } from '@/api/services/Notification';
import { NOTIFICATION_TYPE_LABEL } from '@/constant/notification';
import * as S from '@/styles/layout/layout.style';
import * as T from '@/styles/writeRetroStyles/Layout.style';

const Alarm = () => {
  const [notification, setNotification] = useState<NotificationData[]>();
  const fetchNotification = async () => {
    try {
      const data = await NotificationServices.get();
      setNotification(data.data);
      console.log('notification', notification);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);
  return (
    <Popover>
      <PopoverTrigger>
        <S.IconStyle border-radius="50%">
          <Bell />
        </S.IconStyle>
      </PopoverTrigger>
      <Portal>
        <PopoverContent minW={{ base: '200', md: '500' }}>
          <PopoverArrow />
          <PopoverHeader>
            <BellFill style={{ fontSize: '30px' }} />
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <S.MenuText>알림</S.MenuText>
          </PopoverBody>
          <PopoverFooter style={{ overflow: 'auto' }} maxH={300}>
            {/* <S.MenuText>오늘 받은 알림</S.MenuText> */}
            {notification ? (
              notification.map(item => (
                <S.AlarmContents>
                  <S.AlarmTitle>[{item.retrospectiveTitle}]에서 알림</S.AlarmTitle>
                  {item.senderName}님이 {NOTIFICATION_TYPE_LABEL[item.notificationType]}을{' '}
                  {item.notificationType === 'COMMENT' ? '작성했습니다.' : '남겼습니다'}
                  <Flex justifyContent="flex-end">
                    <T.SubTaskIcon>
                      <MdAccessAlarm size="20px" color="#DADEE5" />
                    </T.SubTaskIcon>
                    <T.SubTaskCount>{convertToLocalTime(item.dateTime)}</T.SubTaskCount>
                  </Flex>
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
