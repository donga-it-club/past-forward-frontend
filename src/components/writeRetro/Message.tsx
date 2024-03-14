import * as S from '../../styles/writeRetroStyles/Message.style';

// 테스트용 객체
const TestTask = {
  MessageCount: 3,
  UserProfile: '유저 이미지',
  UserName: '홍길동',
  Message: '맥락까지 꼼꼼하게 문서에 기재해주셔서 너무 좋아요!',
  Time: '1일전',
  Modify: '수정',
  Delete: '삭제',
};

function Message() {
  return (
    <>
      <S.MessageStyle></S.MessageStyle>
    </>
  );
}

export default Message;
