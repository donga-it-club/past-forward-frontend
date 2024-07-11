import { NoticeMenuBar } from '@/components/notice/NoticeMenuBar';
import { NoticeWriteBox } from '@/components/notice/NoticeWriteBox';
import * as S from '@/styles/notice/noticeWrite.style';

export const NoticeWritePage = () => {
  return (
    <>
      {/* 메뉴바 */}
      <NoticeMenuBar></NoticeMenuBar>
      {/* 바탕화면 */}
      <S.NoticeWriteContainer>
        {/* 입력창 */}
        <NoticeWriteBox></NoticeWriteBox>
      </S.NoticeWriteContainer>
      ;
    </>
  );
};
