import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import * as S from '@/styles/notice/noticeBoard.style';

export const NoticePagination = () => {
  const NoticePageNumber = [1, 2, 3];
  return (
    <>
      <S.NoticePaginationContainer>
        {/* 이전 화살표 */}
        <S.NoticePaginationButton>
          <IoIosArrowBack color="gray" />
        </S.NoticePaginationButton>

        {/* 게시판 페이지 */}
        <p style={{ lineHeight: '20px' }}>{NoticePageNumber}</p>

        {/* 다음 화살표 */}
        <S.NoticePaginationButton>
          <IoIosArrowForward color="gray" />
        </S.NoticePaginationButton>
      </S.NoticePaginationContainer>
    </>
  );
};
