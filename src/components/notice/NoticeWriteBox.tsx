import * as S from '@/styles/notice/noticeWrite.style';

interface NoticeWriteBoxProps {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
}

export const NoticeWriteBox = ({ setTitle, setContent }: NoticeWriteBoxProps) => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <>
      <S.NoticeWriteBoxStyle>
        <S.NoticeWriteMain>
          <S.NoticeWriteMainTitle
            placeholder="제목"
            onChange={handleTitleChange}
            rows={1}
            // onChange={e => {
            //   setTitle(e.target.value);
            // }}
          ></S.NoticeWriteMainTitle>
          <S.NoticeWriteMainLine></S.NoticeWriteMainLine>
          <S.NoticeWriteMainContents placeholder="본문" onChange={handleContentChange}></S.NoticeWriteMainContents>
        </S.NoticeWriteMain>
      </S.NoticeWriteBoxStyle>
    </>
  );
};
