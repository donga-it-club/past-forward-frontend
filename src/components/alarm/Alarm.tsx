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
  Divider,
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
  const [todayNotification, setTodayNotification] = useState<NotificationData[]>([]);
  const [otherNotification, setOtherNotification] = useState<NotificationData[]>([]);
  const [user, setUser] = useState<UserData>();
  const [render, setRender] = useState<boolean>();
  const navigate = useNavigate();
  const toast = useCustomToast();
  const today = new Date();

  const filterNotification = (notification: NotificationData[]) => {
    const todayFiltered: NotificationData[] = [];
    const otherFiltered: NotificationData[] = [];
    notification
      .filter(item => item.receiverId === user?.userId)
      .forEach(item => {
        const dateTime = new Date(item.dateTime);
        if (dateTime.toISOString().slice(0, 10) === today.toISOString().slice(0, 10)) {
          todayFiltered.push(item);
        } else {
          otherFiltered.push(item);
        }

        setTodayNotification(todayFiltered);
        setOtherNotification(otherFiltered);
      });
  };

  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
    } catch (error) {
      console.error(error);
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
      }
      setRender(prev => !prev);
      setOtherNotification([]);
      setTodayNotification([]);
    } catch {
      toast.error('전체 삭제가 처리되지 않았습니다.');
    }
  };

  const ReadNotification = async (notificationId: number) => {
    try {
      await NotificationServices.readPost({ notificationId: notificationId });
      setRender(prev => !prev);
      const isOtherNotification = otherNotification.some(
        notification => notification.notificationId === notificationId,
      );
      if (isOtherNotification) {
        setOtherNotification([]);
      } else {
        setTodayNotification([]);
      }
    } catch {
      console.error('error');
    }
  };

  useEffect(() => {
    fetchUser();
    fetchNotification();
  }, [todayNotification.length, otherNotification.length, render]);

  useEffect(() => {
    if (notification) {
      filterNotification(notification);
    }
  }, [notification]);

  return (
    <Popover>
      <PopoverTrigger>
        <S.IconStyle border-radius="50%">
          <Bell size={20} />
          {todayNotification.concat(otherNotification).length > 0 ? (
            <>
              <S.notificationBadge>{todayNotification.concat(otherNotification).length}</S.notificationBadge>
            </>
          ) : null}
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
            <Flex justifyContent="space-between">
              <S.MenuText>알림</S.MenuText>
              {notification?.length ? <S.AllDeleteText onClick={deleteNotification}>모두 삭제</S.AllDeleteText> : null}
            </Flex>
          </PopoverBody>
          <PopoverFooter style={{ overflow: 'auto' }} maxH={300}>
            <S.MenuText>최근에 받은 알림</S.MenuText>
            <Flex flexDirection="column-reverse">
              {notification && todayNotification.length > 0 ? (
                todayNotification
                  .filter(item => item.receiverId === user?.userId)
                  .map(item => (
                    <S.AlarmContents
                      onClick={() =>
                        navigate(`/sections?retrospectiveId=${item.retrospectiveId}&teamId=${item.teamId}`)
                      }
                    >
                      <Flex justifyContent="space-between">
                        <S.AlarmTitle>[{item.retrospectiveTitle}]에서 알림 </S.AlarmTitle>
                        <MdDelete
                          style={{ margin: 'auto 0', minHeight: '40' }}
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
                <S.MenuText style={{ margin: '0 auto' }}>알림 없음</S.MenuText>
              )}
            </Flex>
            <Divider />
            <S.MenuText style={{ margin: '10px 0' }}>저번에 받은 알림</S.MenuText>
            <Flex flexDirection="column-reverse">
              {notification && otherNotification.length > 0 ? (
                otherNotification
                  .filter(item => item.receiverId === user?.userId)
                  .map(item => (
                    <S.AlarmContents
                      onClick={() =>
                        navigate(`/sections?retrospectiveId=${item.retrospectiveId}&teamId=${item.teamId}`)
                      }
                    >
                      <Flex justifyContent="space-between">
                        <S.AlarmTitle>
                          [{item.retrospectiveTitle}]에서 알림{' '}
                          <Icon viewBox="0 0 200 200" color="red.500" margin="auto 0">
                            <path
                              fill="currentColor"
                              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                          </Icon>
                        </S.AlarmTitle>
                        <MdDelete
                          style={{ margin: 'auto 0', minHeight: '40' }}
                          onClick={() => {
                            ReadNotification(item.notificationId);
                          }}
                        />
                      </Flex>
                      {item.senderName}님이 {NOTIFICATION_TYPE_LABEL[item.notificationType]}
                      {item.notificationType === 'COMMENT' ? '을' : '를'}{' '}
                      {item.notificationType === 'COMMENT' ? '작성했습니다.' : '남겼습니다.'}
                      <Flex justifyContent="flex-end">
                        <T.SubTaskIcon>
                          <MdAccessAlarm size="20px" color="#DADEE5" />
                        </T.SubTaskIcon>
                        <T.SubTaskCount>{convertToLocalTime(item.dateTime)}</T.SubTaskCount>
                      </Flex>
                    </S.AlarmContents>
                  ))
              ) : (
                <S.MenuText style={{ margin: '0 auto' }}>알림 없음</S.MenuText>
              )}
            </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Alarm;
