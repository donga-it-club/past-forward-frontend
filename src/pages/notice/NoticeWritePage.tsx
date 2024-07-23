import { useState } from 'react';
import { NoticeMenuBar } from '@/components/notice/NoticeMenuBar';
import { NoticeWriteBox } from '@/components/notice/NoticeWriteBox';
import * as S from '@/styles/notice/noticeWrite.style';

export const NoticeWritePage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <>
      {/* 메뉴바 */}
      <NoticeMenuBar title={title} content={content}></NoticeMenuBar>
      {/* 바탕화면 */}
      <S.NoticeWriteContainer>
        {/* 입력창 */}
        <NoticeWriteBox setTitle={setTitle} setContent={setContent}></NoticeWriteBox>
      </S.NoticeWriteContainer>
      ;
    </>
  );
};
