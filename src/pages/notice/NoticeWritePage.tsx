import { useEffect, useState } from 'react';
import { GetUsersResponse } from '@/api/@types/User';
import getUser from '@/api/imageApi/getUser';
import { NoticeMenuBar } from '@/components/notice/NoticeMenuBar';
import { NoticeWriteBox } from '@/components/notice/NoticeWriteBox';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/notice/noticeWrite.style';

export const NoticeWritePage = () => {
  const toast = useCustomToast();

  const [userData, setUserData] = useState<GetUsersResponse | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // 유저 정보 조회
  // import { UserData } from '@/api/@types/Users';
  // import { UserServices } from '@/api/services/User';
  // const [user, setUser] = useState<UserData>();
  // const fetchUser = async () => {
  //   try {
  //     const data = await UserServices.get();
  //     setUser(data.data);
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchUser();
  // }, []);
  // if (!user) return;
  const fetchUserData = async () => {
    try {
      const response = await getUser();
      console.log('유저 정보', response);
      setUserData(response);
    } catch (error) {
      console.error('에러', error);
      toast.error(error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  if (!userData) return;

  return (
    <>
      {/* 메뉴바 */}
      <NoticeMenuBar title={title} content={content}></NoticeMenuBar>
      {/* 바탕화면 */}
      <S.NoticeWriteContainer>
        {/* 입력창 */}
        <NoticeWriteBox setTitle={setTitle} setContent={setContent}></NoticeWriteBox>
      </S.NoticeWriteContainer>
      ;
    </>
  );
};
