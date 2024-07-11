import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import * as S from '@/styles/notice/noticeShow.style';

export const NoticeShowFooter = () => {
  const PreviousNotice = '이전 글';
  const NextNotice = '다음 글';
  return (
    <>
      <S.NoticeShowFooterStyle>
        {/* 이전 글 */}
        <S.OtherNoticeArrow>
          <IoIosArrowUp size={29} color="#8A95B7" />
        </S.OtherNoticeArrow>
        <S.OtherNoticeTitle style={{ gridRow: 2 }}>{NextNotice}</S.OtherNoticeTitle>

        <S.OtherNoticeTitle style={{ gridRow: 1 }}>{PreviousNotice}</S.OtherNoticeTitle>
        {/* 다음 글 */}
        <S.OtherNoticeArrow>
          <IoIosArrowDown size={29} color="#8A95B7" />
        </S.OtherNoticeArrow>
        <S.OtherNoticeTitle style={{ gridRow: 2 }}>{NextNotice}</S.OtherNoticeTitle>
      </S.NoticeShowFooterStyle>
    </>
  );
};
