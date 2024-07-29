import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowHeaderProps {
  title: string;
  date: string;
  view: number;
}

export const FakeNoticeShowHeader = ({ title, date, view }: NoticeShowHeaderProps) => {
  const NoticeWriter = '관리자';
  const navigate = useNavigate();
  const handleNoticeClose = () => {
    navigate('/');
  };

  return (
    <>
      <S.NoticeShowHeaderStyle>
        <button onClick={handleNoticeClose}>
          <MdOutlineClose
            style={{ position: 'absolute', top: '20px', right: '10vw' }}
            size={34}
            color="rgba(0, 0, 0, 0.2)"
          />
        </button>
        <p style={{ fontSize: '40px', fontWeight: '800', color: '#25213B', margin: '20px' }}>공지사항</p>
        {/* 게시물 제목 */}
        <S.NoticeShowTitle>{title}</S.NoticeShowTitle>
        {/* 게시물 정보 */}
        <S.NoticeShowInformation>
          <span>{`${NoticeWriter} | ${date} | 조회수  ${view}`}</span>
        </S.NoticeShowInformation>
      </S.NoticeShowHeaderStyle>
      <S.NoticeShowHeaderLine></S.NoticeShowHeaderLine>
    </>
  );
};
