import { FakeNoticeShowFooter } from '@/components/notice/FakeNotice/FakeNoticeShowFooter';
import { FakeNoticeShowHeader } from '@/components/notice/FakeNotice/FakeNoticeShowHeader';
import { FakeNoticeShowMainFirst, FakeNoticeShowMainSecond } from '@/components/notice/FakeNotice/FakeNoticeShowMain';
import * as S from '@/styles/notice/noticeShow.style';

export const FakeNoticeShowPageFirst = () => {
  return (
    <>
      <S.NoticeShowContainer>
        <div style={{ gridColumn: '2' }}>
          {/* 게시물 헤더 */}
          <FakeNoticeShowHeader title="회고 어떻게 해야 잘할 수 있을까?" date="2024.03.09" view={78} />

          {/* 게시물 내용 */}
          <FakeNoticeShowMainFirst />

          {/* 다른 게시물로 이동 */}
          <FakeNoticeShowFooter direction="First" />
        </div>
      </S.NoticeShowContainer>
    </>
  );
};

export const FakeNoticeShowPageSecond = () => {
  return (
    <>
      <S.NoticeShowContainer>
        <div style={{ gridColumn: '2' }}>
          {/* 게시물 헤더 */}
          <FakeNoticeShowHeader title="왜, 회고가 중요한가?" date="2024.03.09" view={78} />

          {/* 게시물 내용 */}
          <FakeNoticeShowMainSecond />

          {/* 다른 게시물로 이동 */}
          <FakeNoticeShowFooter direction="Second" />
        </div>
      </S.NoticeShowContainer>
    </>
  );
};
