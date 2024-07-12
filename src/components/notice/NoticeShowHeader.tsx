import * as S from '@/styles/notice/noticeShow.style';

export const NoticeShowHeader = () => {
  const NoticeShowTitle = '회고, 어떻게 해야 잘할 수 있을까?';
  const NoticeWriter = '조용복';
  const NoticeDate = '2024.03.09';
  const NoticeView = 78;

  return (
    <>
      <S.NoticeShowHeaderStyle>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '40px', fontWeight: '800', color: '#25213B', margin: '20px' }}>공지사항</p>
          <S.NoticeShowTitle>{NoticeShowTitle}</S.NoticeShowTitle>
          <S.NoticeShowInformation>
            <span>{NoticeWriter} | </span>
            <span>{NoticeDate} | </span>
            <span>조회수 {NoticeView}</span>
          </S.NoticeShowInformation>
        </div>

        <S.NoticeShowHeaderLine></S.NoticeShowHeaderLine>
      </S.NoticeShowHeaderStyle>
    </>
  );
};
