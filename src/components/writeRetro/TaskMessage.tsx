import * as S from '../../styles/writeRetroStyles/TaskMessage.style';
import Message from '../../components/writeRetro/Message';

// 테스트용 객체
const TestTask = {
  MessageCount: 3,
};

function TaskMessage() {
  return (
    <>
      <S.TaskMessageStyle>
        <S.AnnounceMessageCount>{TestTask.MessageCount}개의 댓글</S.AnnounceMessageCount>
        <S.MessageLine></S.MessageLine>
        <S.MessageBox>
          <Message></Message>
          <Message></Message>
          <Message></Message>
        </S.MessageBox>
      </S.TaskMessageStyle>
    </>
  );
}

export default TaskMessage;
