import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import * as S from '@/styles/notice/noticeBoard.style';

export const NoticeBoardContents = () => {
  return (
    <>
      <S.NoticeBoardContentsStyle>
        <p className="NoticeBoardContentsText">1</p>
        <p className="NoticeBoardContentsText" style={{ textAlign: 'left' }}>
          일반공지, 공결 신청시 유의사항(공결 신청 시 반드시 확인)
        </p>
        <p className="NoticeBoardContentsText">2024-02-28</p>
        <p className="NoticeBoardContentsText">26</p>
      </S.NoticeBoardContentsStyle>
      <S.NoticeBoardContentsLine></S.NoticeBoardContentsLine>
      <S.NoticeBoardContentsStyle>
        <p className="NoticeBoardContentsText">2</p>
        <p className="NoticeBoardContentsText" style={{ textAlign: 'left' }}>
          회고, 어떻게 해야 잘할 수 있을까?
        </p>
        <p className="NoticeBoardContentsText">2024-02-28</p>
        <p className="NoticeBoardContentsText">15</p>
      </S.NoticeBoardContentsStyle>
      <S.NoticeBoardContentsLine></S.NoticeBoardContentsLine>
    </>
  );
};

export const NoticeBoard = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 9fr 1fr',
        marginTop: '800px',
      }}
    >
      <S.NoticeBoardContainer>
        <S.NoticeBoardTitle>게시판</S.NoticeBoardTitle>
        <S.NoticeBoardBox>
          <p>번호</p>
          <p style={{ textAlign: 'left' }}>제목</p>
          <p>작성일</p>
          <p>조회수</p>

          {/* 게시판 내용 */}
          <S.NoticeBoardContentsBox>
            <div style={{ height: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
              <NoticeBoardContents></NoticeBoardContents>
            </div>
          </S.NoticeBoardContentsBox>
        </S.NoticeBoardBox>
        <div style={{ textAlign: 'right' }}>
          <S.NoticeWriteButton>글쓰기</S.NoticeWriteButton>
        </div>
        <S.NoticeMoveArrow>
          <IoIosArrowBack color="gray" />
          <p>1</p>
          <IoIosArrowForward color="gray" />
        </S.NoticeMoveArrow>
      </S.NoticeBoardContainer>
    </div>
  );
};
