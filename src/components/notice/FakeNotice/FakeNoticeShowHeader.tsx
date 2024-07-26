import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowHeaderProps {
  title: string;
  date: string;
  view: number;
}

export const FakeNoticeShowHeader = ({ title, date, view }: NoticeShowHeaderProps) => {
  const NoticeWriter = '관리자';

  return (
    <>
      <S.NoticeShowHeaderStyle>
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
