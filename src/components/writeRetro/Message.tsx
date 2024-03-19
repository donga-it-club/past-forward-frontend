import * as S from '../../styles/writeRetroStyles/Message.style';
import image from '../../assets/Avatar Image.png';

// 테스트용 객체
const TestTask = {
  MessageCount: 3,
  UserProfile: '유저 이미지',
  UserName: '홍길동',
  Message: '맥락까지 꼼꼼하게 문서에 기재해주셔서 너무 좋아요!',
  Time: '1일전',
};

function Message() {
  return (
    <>
      <S.MessageStyle>
        <S.MessageUserProfile>
          <img src={image}></img>
        </S.MessageUserProfile>
        <S.MessageUserName>{TestTask.UserName}</S.MessageUserName>
        <S.MessageDaysLeft>{TestTask.Time}</S.MessageDaysLeft>
        <S.MessageText>{TestTask.Message}</S.MessageText>
        <S.ModifyingMessage>수정 / 삭제</S.ModifyingMessage>
      </S.MessageStyle>
    </>
  );
}

export default Message;
