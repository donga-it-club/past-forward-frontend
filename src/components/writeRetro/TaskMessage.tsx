import * as S from '../../styles/writeRetroStyles/TaskMessage.style';
import Message from '../../components/writeRetro/Message';

type TaskMessageProps = {
  count: string;
};

function TaskMessage({ count }: TaskMessageProps) {
  return (
    <>
      <S.TaskMessageStyle>
        <S.AnnounceMessageCount>{count}개의 댓글</S.AnnounceMessageCount>
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
