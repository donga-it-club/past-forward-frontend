import { NoticeShowFooter } from '@/components/notice/NoticeShowFooter';
import { NoticeShowHeader } from '@/components/notice/NoticeShowHeader';
import * as S from '@/styles/notice/noticeShow.style';

export const NoticeShowPage = () => {
  return (
    <>
      <S.NoticeShowContainer>
        <div style={{ gridColumn: '2' }}>
          <NoticeShowHeader></NoticeShowHeader>
          <NoticeShowFooter></NoticeShowFooter>
        </div>
      </S.NoticeShowContainer>
    </>
  );
};
