import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/notice/noticeBoard.style';

interface FakeNoticeBoardContentsProps {
  index: number;
  title: string;
  date: string;
  view: number;
  move: string;
}

// 가짜 게시물(1)
export const FakeNoticeBoardContents = ({ index, title, date, view, move }: FakeNoticeBoardContentsProps) => {
  const navigate = useNavigate();

  // 개별 게시글 페이지로 이동
  const handleMoveNoticeShow = () => {
    navigate(`/${move}`);
  };
  return (
    <>
      <S.NoticeBoardContentsStyle>
        {/* 번호 */}
        <p className="NoticeBoardContentsText">{index}</p>

        {/* 제목 */}
        <div style={{ textAlign: 'left' }} onClick={handleMoveNoticeShow}>
          <p className="NoticeBoardContentsText" style={{ textAlign: 'left', cursor: 'pointer', margin: '10px 0px' }}>
            {title}
          </p>
        </div>

        {/* 작성일 */}
        <p className="NoticeBoardContentsText">{date}</p>

        {/* 조회수 */}
        <p className="NoticeBoardContentsText">{view}</p>
      </S.NoticeBoardContentsStyle>
      <S.NoticeBoardContentsLine></S.NoticeBoardContentsLine>
    </>
  );
};
