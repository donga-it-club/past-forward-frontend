import * as S from '@/styles/notice/noticeWrite.style';

export const NoticeMenuBar = () => {
  const TemporarySaveCount = 3;
  return (
    <>
      {/* 메뉴바 */}
      <S.NoticeMenuBarStyle>
        <S.NoticeMenuTitle>공지사항</S.NoticeMenuTitle>
        <div style={{ textAlign: 'right' }}>
          <div style={{ marginTop: '27px', marginRight: '5vw' }}>
            <S.NoticeTemporarySaveButton>
              <span>저장 |</span>
              <span style={{ marginLeft: '5px' }}>{TemporarySaveCount}</span>
            </S.NoticeTemporarySaveButton>
            <S.NoticeSaveButton>저장</S.NoticeSaveButton>
            <S.NoticeCancelButton>취소</S.NoticeCancelButton>
          </div>
        </div>
      </S.NoticeMenuBarStyle>
    </>
  );
};
