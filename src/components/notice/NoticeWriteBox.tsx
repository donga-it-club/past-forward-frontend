import * as S from '@/styles/notice/noticeWrite.style';

interface NoticeWriteBoxProps {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
}

export const NoticeWriteBox = ({ setTitle, setContent }: NoticeWriteBoxProps) => {
  // api에 제목 전달하기
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  // api에 본문 전달하기
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <>
      <S.NoticeWriteBoxStyle>
        <S.NoticeWriteMain>
          {/* 제목 */}
          <S.NoticeWriteMainTitle placeholder="제목" onChange={handleTitleChange} rows={1}></S.NoticeWriteMainTitle>
          <S.NoticeWriteMainLine></S.NoticeWriteMainLine>

          {/* 본문 */}
          <S.NoticeWriteMainContents placeholder="본문" onChange={handleContentChange}></S.NoticeWriteMainContents>

          {/* 이미지 */}
          {/* <S.NoticeShowImgContainer>
            <S.NoticeShowImgStyle></S.NoticeShowImgStyle>
          </S.NoticeShowImgContainer> */}
        </S.NoticeWriteMain>
      </S.NoticeWriteBoxStyle>
    </>
  );
};
