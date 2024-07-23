import * as S from '@/styles/notice/noticeShow.style';

interface NoticeShowMainProps {
  content: string;
}

export const NoticeShowMain = ({ content }: NoticeShowMainProps) => {
  return (
    <>
      <S.NoticeShowMainStyle>
        <div style={{ gridColumn: '2' }}>
          {/* 게시물 텍스트 */}
          <S.NoticeShowText>{content}</S.NoticeShowText>

          {/* 게시물 사진 */}
          <S.NoticeShowImgContainer>
            <S.NoticeShowImg></S.NoticeShowImg>
          </S.NoticeShowImgContainer>
        </div>
      </S.NoticeShowMainStyle>
    </>
  );
};
