import * as S from '@/styles/notice/noticeWrite.style';

export const NoticeWriteBox = () => {
  return (
    <>
      <S.NoticeWriteBoxStyle>
        <S.NoticeWriteMain>
          <S.NoticeWriteMainTitle placeholder="제목"></S.NoticeWriteMainTitle>
          <S.NoticeWriteMainLine></S.NoticeWriteMainLine>
          <S.NoticeWriteMainContents placeholder="본문"></S.NoticeWriteMainContents>
        </S.NoticeWriteMain>
      </S.NoticeWriteBoxStyle>
    </>
  );
};
