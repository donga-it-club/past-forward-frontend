import { useEffect, useState } from 'react';
import { Bell, BellFill } from 'react-bootstrap-icons';
import { MdAccessAlarm, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
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
  Icon,
} from '@chakra-ui/react';
import { convertToLocalTime } from '../RetroList/ContentsList';
import { NotificationData } from '@/api/@types/Notification';
import { UserData } from '@/api/@types/Users';
import { NotificationServices } from '@/api/services/Notification';
import { UserServices } from '@/api/services/User';
import { NOTIFICATION_TYPE_LABEL } from '@/constant/notification';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/layout/layout.style';
import * as T from '@/styles/writeRetroStyles/Layout.style';

const Alarm = () => {
  const [notification, setNotification] = useState<NotificationData[]>();
  const [user, setUser] = useState<UserData>();
  const [render, setRender] = useState<boolean>();
  const navigate = useNavigate();
  const toast = useCustomToast();

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const fetchNotification = async () => {
    try {
      const data = await NotificationServices.get();
      setNotification(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteNotification = async () => {
    try {
      if (user && user.userId) {
        await NotificationServices.delete({ userId: user.userId });
        setRender(prev => !prev);
      }
    } catch {
      toast.error('전체 삭제가 처리되지 않았습니다.');
    }
  };

  const ReadNotification = async (notificationId: number) => {
    try {
      await NotificationServices.readPost({ notificationId: notificationId });
      setRender(prev => !prev);
    } catch {
      toast.error('error');
    }
  };

  useEffect(() => {
    fetchNotification();
    fetchUser();
  }, [render]);

  return (
    <Popover>
      <PopoverTrigger>
        <S.IconStyle border-radius="50%">
          <Bell size={20} />
          {notification && notification.length > 0 && (
            <>
              <S.notificationBadge>{notification.length}</S.notificationBadge>
            </>
          )}
        </S.IconStyle>
      </PopoverTrigger>
      <Portal>
        <PopoverContent minW={{ base: '200', md: '500' }} zIndex={999}>
          <PopoverArrow />
          <PopoverHeader>
            <BellFill style={{ fontSize: '30px' }} />
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex justifyContent="space-between" margin="0 10px">
              <S.MenuText>알림</S.MenuText>
              {notification?.length ? <S.AllDeleteText onClick={deleteNotification}>모두 삭제</S.AllDeleteText> : null}
            </Flex>
          </PopoverBody>
          <PopoverFooter style={{ overflow: 'auto' }} maxH={300}>
            {/* <S.MenuText>오늘 받은 알림</S.MenuText> */}
            <Flex flexDirection="column-reverse">
              {notification ? (
                notification.map(item => (
                  <S.AlarmContents onClick={() => navigate(`/`)}>
                    <Flex justifyContent="space-between">
                      <S.AlarmTitle>
                        [{item.retrospectiveTitle}]에서 알림{' '}
                        <Icon viewBox="0 0 200 200" color="red.500" margin="auto 0">
                          <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
                        </Icon>
                      </S.AlarmTitle>
                      <MdDelete
                        style={{ margin: 'auto 0', minHeight: '30' }}
                        onClick={() => {
                          ReadNotification(item.notificationId);
                        }}
                      />
                    </Flex>
                    {item.senderName}님이 {NOTIFICATION_TYPE_LABEL[item.notificationType]}
                    {item.notificationType === 'COMMENT' ? '을' : '를'}{' '}
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
            </Flex>

            {/* <S.MenuText>어제 받은 알림</S.MenuText>
            <S.AlarmContents>이채연님이 회고보드에 댓글을 작성했습니다 </S.AlarmContents> */}
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Alarm;
