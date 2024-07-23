import { useEffect, useState } from 'react';
// import getUser from '@/api/imageApi/getUser';
// import { GetUsersResponse } from '@/api/@types/User';
import { useNavigate } from 'react-router-dom';
import { NoticeBoardContents } from './NoticeBoardContents';
import { NoticePagination } from './NoticePagination';
import { GetNoticeListPosts } from '@/api/@types/NoticeBoard';
import { UserData } from '@/api/@types/Users';
import { NoticeServices } from '@/api/services/NoticeBoard';
import { UserServices } from '@/api/services/User';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/notice/noticeBoard.style';

export const NoticeBoard = () => {
  const toast = useCustomToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData>();
  const [NoticeList, setNoticeList] = useState<GetNoticeListPosts[]>([]);

  // 관리자 권한 부여 api
  // import { UserServices } from '@/api/services/User';
  // const handleNoticeAdmin = async () => {
  //   try {
  //     await UserServices.adminPost({
  //       email: 'binny1204@naver.com',
  //       admin: true,
  //     });
  //     toast.success('관리자 권한이 부여되었습니다.');
  //   } catch (e) {
  //     toast.error(e);
  //   }
  // };

  // 유저 정보 조회
  // const fetchUserData = async () => {
  //   try {
  //     const response = await getUser();
  //     console.log('유저 정보', response);
  //     setUserData(response);
  //   } catch (error) {
  //     console.error('에러', error);
  //     toast.error(error);
  //   }
  // };
  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
      console.log(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  // 게시글 목록 조회 api
  // const [page, setPage] = useState<number>(1);
  // const [size, setSize] = useState<number>(10);
  const fetchNotice = async () => {
    try {
      const data = await NoticeServices.listGet({ page: 1, size: 10 });
      setNoticeList(data.data.posts);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchNotice();
  }, []);
  if (!user) return;

  const handleNoticeWriteButton = () => {
    navigate('/noticeWrite');
  };
  return (
    <div
      style={{
        width: '100vw',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 9fr 1fr',
        margin: ' 300px 0',
      }}
    >
      <S.NoticeBoardContainer>
        <S.NoticeBoardTitle>게시판</S.NoticeBoardTitle>

        {/* 게시판 제목 */}
        <S.NoticeBoardBox>
          <S.NoticeBoardContentsTitle>번호</S.NoticeBoardContentsTitle>
          <S.NoticeBoardContentsTitle style={{ textAlign: 'left' }}>제목</S.NoticeBoardContentsTitle>
          <S.NoticeBoardContentsTitle>작성일</S.NoticeBoardContentsTitle>
          <S.NoticeBoardContentsTitle>조회수</S.NoticeBoardContentsTitle>

          <S.NoticeBoardContentsBox>
            <div style={{ height: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
              {/* 게시판 내용: NoticeList ExData.data.posts*/}
              {NoticeList.map((posts, index) => (
                <NoticeBoardContents posts={posts} key={posts.id} index={index + 1}></NoticeBoardContents>
              ))}
            </div>
          </S.NoticeBoardContentsBox>
        </S.NoticeBoardBox>

        {/* 글쓰기 버튼 */}
        <div style={{ textAlign: 'right' }}>
          <S.NoticeWriteButton onClick={handleNoticeWriteButton}>글쓰기</S.NoticeWriteButton>
        </div>

        {/* 게시판 목록 리모컨 */}
        <NoticePagination></NoticePagination>
      </S.NoticeBoardContainer>
    </div>
  );
};
