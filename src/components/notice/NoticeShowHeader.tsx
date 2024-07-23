import { useNavigate } from 'react-router-dom';
import { NoticeServices } from '@/api/services/NoticeBoard';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowHeaderProps {
  id: number;
  title: string;
  date: string;
  views: number;
}

export const NoticeShowHeader = ({ id, title, date, views }: NoticeShowHeaderProps) => {
  const navigate = useNavigate();
  const toast = useCustomToast();
  const NoticeWriter = '관리자';

  // 게시글 시간 포멧 만들기
  const convertToLocalTime = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const localTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    const year = localTime.getFullYear();
    const month = String(localTime.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(localTime.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`; // "YY-MM-DD" 형식으로 반환
  };

  // 게시물 삭제 api 연결
  const handleDeleteNotice = async () => {
    try {
      await NoticeServices.delete({ id: id });
      setTimeout(() => {
        navigate('/');
        toast.info('게시글이 삭제되었습니다.');
      }, 1000); // 1초(1000밀리초) 후에 함수를 실행
    } catch (e) {
      toast.error(e);
    }
  };

  // 게시물 수정 api 연결
  const handleReviseNotice = () => {
    navigate(`/noticeWrite?id=${id}`);
  };
  return (
    <>
      <S.NoticeShowHeaderStyle>
        <p style={{ fontSize: '40px', fontWeight: '800', color: '#25213B', margin: '20px' }}>공지사항</p>

        {/* 게시물 제목 */}
        <S.NoticeShowTitle>{title}</S.NoticeShowTitle>

        {/* 게시물 정보 */}
        <S.NoticeShowInformation>
          <span>{`${NoticeWriter} | ${convertToLocalTime(date)} | 조회수  ${views}`}</span>
        </S.NoticeShowInformation>

        {/* 게시물 버튼 */}
        <S.NoticeShowButtonContainer>
          {/* 게시물 수정 버튼 */}
          <S.NoticeReviseButton onClick={handleReviseNotice}>수정</S.NoticeReviseButton>

          {/* 게시물 삭제 버튼 */}
          <S.NoticeDeleteButton onClick={handleDeleteNotice}>삭제</S.NoticeDeleteButton>
        </S.NoticeShowButtonContainer>
      </S.NoticeShowHeaderStyle>
      <S.NoticeShowHeaderLine></S.NoticeShowHeaderLine>
    </>
  );
};
