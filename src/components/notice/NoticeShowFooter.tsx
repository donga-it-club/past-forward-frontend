import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowFooterProps {
  id: number;
}

export const NoticeShowFooter = ({ id }: NoticeShowFooterProps) => {
  return (
    <>
      <S.NoticeShowFooterLine></S.NoticeShowFooterLine>
      <S.NoticeShowFooterStyle>
        {/* 이전 글 */}
        <NoticeShowMove direction="up" id={id}></NoticeShowMove>
        {/* 다음 글 */}
        <NoticeShowMove direction="down" id={id}></NoticeShowMove>
      </S.NoticeShowFooterStyle>
    </>
  );
};

interface NoticeShowMoveProps {
  direction: 'up' | 'down';
  id: number;
}

export const NoticeShowMove = ({ direction, id }: NoticeShowMoveProps) => {
  const navigate = useNavigate();

  const { icon, title } =
    direction === 'up'
      ? { icon: <IoIosArrowUp size={29} color="#8A95B7" />, title: '이전 글' }
      : { icon: <IoIosArrowDown size={29} color="#8A95B7" />, title: '다음 글' };

  // 게시물로 이동하기
  const noticeMove = direction === 'up' ? id - 1 : id + 1;
  const handleNoticeShowMove = () => {
    navigate(`/noticeShow?id=${noticeMove}`);
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
