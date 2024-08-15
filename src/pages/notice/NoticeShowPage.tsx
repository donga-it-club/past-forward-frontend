import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GetNoticePostsData } from '@/api/@types/NoticeBoard';
import { NoticeServices } from '@/api/services/NoticeBoard';
import { NoticeShowFooter } from '@/components/notice/NoticeShowFooter';
import { NoticeShowHeader } from '@/components/notice/NoticeShowHeader';
import { NoticeShowMain } from '@/components/notice/NoticeShowMain';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/notice/noticeShow.style';

export const NoticeShowPage = () => {
  const toast = useCustomToast();

  // url의 쿼리 문자열에서 게시물 Id 값 가져오기
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const NoticeShowId = Number(query[1]);
  // const NoticeShowIndex = Number(query[3]);

  // 개별 게시물 조회
  const [notice, setNotice] = useState<GetNoticePostsData>();
  const fetchNoticeShow = async () => {
    try {
      const data = await NoticeServices.postsGet({ id: NoticeShowId });
      setNotice(data.data);
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchNoticeShow();
  }, [NoticeShowId]);

  return (
    <>
      <S.NoticeShowContainer>
        <div style={{ gridColumn: '2' }}>
          {notice ? (
            <>
              {/* 게시물 헤더 */}
              <NoticeShowHeader id={NoticeShowId} title={notice.title} date={notice.createdDate} views={notice.views} />

              {/* 게시물 내용 */}
              <NoticeShowMain content={notice.content} />

              {/* 다른 게시물로 이동 */}
              <NoticeShowFooter id={NoticeShowId} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </S.NoticeShowContainer>
    </>
  );
};
