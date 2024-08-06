import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
// import { GetNoticePostsData } from '@/api/@types/NoticeBoard';
import { usePublishedNotice } from './NoticeBoard';
import { GetNoticeListPosts } from '@/api/@types/NoticeBoard';
import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowFooterProps {
  id: number;
}

interface NoticeShowMoveProps {
  direction: 'up' | 'down';
  id: number;
  notice: GetNoticeListPosts[];
}

export const NoticeShowMove = ({ direction, id, notice }: NoticeShowMoveProps) => {
  const navigate = useNavigate();
  const index = notice.findIndex(post => post.id === id);

  const { move, icon, title } =
    direction === 'up'
      ? {
          move: index - 1,
          icon: <IoIosArrowUp size={29} color="#8A95B7" />,
          title: index > 0 ? notice[index - 1]?.title ?? 'No more posts' : 'No more posts',
        }
      : {
          move: index + 1,
          icon: <IoIosArrowDown size={29} color="#8A95B7" />,
          title: index < notice.length - 1 ? notice[index + 1]?.title ?? 'No more posts' : 'No more posts',
        };

  const handleNoticeShowMove = () => {
    if (move >= 0 && move < notice.length) {
      navigate(`/noticeShow?id=${notice[move].id}&index=${move}`);
    }
  };

  return (
    <>
      <S.NoticeShowMoveStyle>
        {/* 게시물 이동 화살표 */}
        <S.NoticeMoveArrow onClick={handleNoticeShowMove}>{icon}</S.NoticeMoveArrow>

        {/* 이동할 게시물의 제목 */}
        <S.NoticeMoveTitle onClick={handleNoticeShowMove}>{title}</S.NoticeMoveTitle>
      </S.NoticeShowMoveStyle>
      <S.NoticeShowFooterLine></S.NoticeShowFooterLine>
    </>
  );
};

export const NoticeShowFooter = ({ id }: NoticeShowFooterProps) => {
  const publishedList = usePublishedNotice();

  return (
    <>
      <S.NoticeShowFooterLine></S.NoticeShowFooterLine>
      <S.NoticeShowFooterStyle>
        {/* 이전 글 */}
        <NoticeShowMove direction="up" id={id} notice={publishedList}></NoticeShowMove>
        {/* 다음 글 */}
        <NoticeShowMove direction="down" id={id} notice={publishedList}></NoticeShowMove>
      </S.NoticeShowFooterStyle>
    </>
  );
};
