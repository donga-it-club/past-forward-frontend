import { useNavigate } from 'react-router-dom';
import { GetNoticeListPosts } from '@/api/@types/NoticeBoard';
import * as S from '@/styles/notice/noticeBoard.style';

interface NoticeBoardContentsProps {
  posts: GetNoticeListPosts;
  index: number;
}

// 게시글 시간 포멧 만들기
export const convertToLocalTime = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const localTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  const year = localTime.getFullYear();
  const month = String(localTime.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  const day = String(localTime.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`; // "YY-MM-DD" 형식으로 반환
};

export const NoticeBoardContents = ({ posts, index }: NoticeBoardContentsProps) => {
  const navigate = useNavigate();

  // 개별 게시글 페이지로 이동
  const handleMoveNoticeShow = () => {
    navigate(`/noticeShow?id=${posts.id}`);
  };
  return (
    <>
      <S.NoticeBoardContentsStyle>
        {/* 번호 */}
        <p className="NoticeBoardContentsText">{index}</p>

        {/* 제목 */}
        <div style={{ textAlign: 'left' }} onClick={handleMoveNoticeShow}>
          <p className="NoticeBoardContentsText" style={{ textAlign: 'left', cursor: 'pointer' }}>
            {posts.title}
          </p>
        </div>

        {/* 작성일 */}
        <p className="NoticeBoardContentsText">{convertToLocalTime(posts.createdDate)}</p>

        {/* 조회수 */}
        <p className="NoticeBoardContentsText">{posts.views}</p>
      </S.NoticeBoardContentsStyle>
      <S.NoticeBoardContentsLine></S.NoticeBoardContentsLine>
    </>
  );
};
