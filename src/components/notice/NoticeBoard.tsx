import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { NoticeBoardContents } from './NoticeBoardContents';
import { FakeNoticeBoardContents } from './FakeNotice/FakeNoticeBoardContents';
import { NoticePagination } from './NoticePagination';
import { GetNoticeListPosts } from '@/api/@types/NoticeBoard';
import { UserData } from '@/api/@types/Users';
import { NoticeServices } from '@/api/services/NoticeBoard';
import { UserServices } from '@/api/services/User';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/notice/noticeBoard.style';

// 발행한 게시물 조회
export const usePublishedNotice = () => {
  const [PublishedNoticeList, setPublishedNoticeList] = useState<GetNoticeListPosts[]>([]);
  const toast = useCustomToast();

  // 게시글 목록 조회 api
  const fetchNotice = async () => {
    try {
      const data = await NoticeServices.listGet({ page: 1, size: 10 });
      setPublishedNoticeList(data.data.posts.filter(post => post.status === 'PUBLISHED'));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchNotice();
  }, []);

  return PublishedNoticeList;
};

// 임시저장한 게시물 조회
export const useTempNotice = () => {
  const [TempNoticeList, setTempNoticeList] = useState<GetNoticeListPosts[]>([]);
  const toast = useCustomToast();

  // 게시글 목록 조회 api
  const fetchNotice = async () => {
    try {
      const data = await NoticeServices.listGet({ page: 1, size: 10 });
      setTempNoticeList(data.data.posts.filter(post => post.status === 'TEMP'));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchNotice();
  }, []);

  return TempNoticeList;
};

export const NoticeBoard = () => {
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

  const toast = useCustomToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData>();
  // const publishedList = usePublishedNotice();
  // const tempList = useTempNotice();

  // 유저 정보 조회
  const fetchUser = async () => {
    try {
      const data = await UserServices.get();
      setUser(data.data);
      console.log(data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
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
              {/* 게시판 내용*/}
              {/* {publishedList.map((posts, index) => (
                <NoticeBoardContents posts={posts} key={posts.id} index={index}></NoticeBoardContents>
              ))} */}

              {/* 가짜 게시물 내용 */}
              <FakeNoticeBoardContents
                index={1}
                title="회고 어떻게 해야 잘할 수 있을까?"
                date="2024.03.09"
                view={78}
                move="noticeShowFirst"
              ></FakeNoticeBoardContents>
              <FakeNoticeBoardContents
                index={2}
                title="왜, 회고가 중요한가?"
                date="2024.03.09"
                view={78}
                move="noticeShowSecond"
              ></FakeNoticeBoardContents>
            </div>
          </S.NoticeBoardContentsBox>
        </S.NoticeBoardBox>

        {/* 글쓰기 버튼 */}
        {user.administrator && (
          <div style={{ textAlign: 'right' }}>
            <S.NoticeWriteButton onClick={handleNoticeWriteButton}>글쓰기</S.NoticeWriteButton>
          </div>
        )}

        {/* 게시판 목록 리모컨 */}
        <NoticePagination></NoticePagination>
      </S.NoticeBoardContainer>
    </div>
  );
};
