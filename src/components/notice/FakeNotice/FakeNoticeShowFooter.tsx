import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowFooterProps {
  direction: string;
}

interface NoticeShowMoveProps {
  direction: string;
}

export const FakeNoticeShowMove = ({ direction }: NoticeShowMoveProps) => {
  const navigate = useNavigate();

  const { move, icon, title } =
    direction === 'First'
      ? {
          move: 'noticeShowSecond',
          icon: <IoIosArrowDown size={29} color="#8A95B7" />,
          title: '왜, 회고가 중요한가?',
        }
      : {
          move: 'noticeShowFirst',
          icon: <IoIosArrowUp size={29} color="#8A95B7" />,
          title: '회고 어떻게 해야 잘할 수 있을까?',
        };

  const handleNoticeShowMove = () => {
    navigate(`/${move}`);
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

export const FakeNoticeShowFooter = ({ direction }: NoticeShowFooterProps) => {
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <S.NoticeShowFooterLine></S.NoticeShowFooterLine>
        <S.NoticeShowFooterStyle>
          {/* 글 이동 */}
          <FakeNoticeShowMove direction={direction}></FakeNoticeShowMove>
        </S.NoticeShowFooterStyle>
      </div>
    </>
  );
};
