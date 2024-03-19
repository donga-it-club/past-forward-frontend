import * as S from '../../styles/writeRetroStyles/Task.style';
import image from '../../assets/Avatar Image.png';
import ThumbUp from '../../assets/thumb_up.png';
import Message from '../../assets/message.png';
import DaysLeft from '../../assets/access_alarms.png';
import TaskMessage from '../../components/writeRetro/TaskMessage';

// 테스트용 객체
const TestTask = {
  UserName: '홍길동',
  userProfile: '유저 이미지',
  TaskTitle: '노션의 페이지 작성을 잘했다.',
  ThumbUpCount: 4,
  MessageCount: 3,
  DaysLeft: '2 Hours ago',
};

function Task() {
  return (
    <>
      <S.TaskStyle>
        <S.TaskMainStyle>
          <S.TaskUserNameStyle>{TestTask.UserName}</S.TaskUserNameStyle>
          <S.TaskTitleStyle>{TestTask.TaskTitle}</S.TaskTitleStyle>
          <S.TaskUserProfile>
            <img src={image}></img>
          </S.TaskUserProfile>
          <S.ThumbUpIcon>
            <img src={ThumbUp}></img>
          </S.ThumbUpIcon>
          <S.TaskSubCount left="42px">{TestTask.ThumbUpCount}</S.TaskSubCount>
          <S.MessageIcon>
            <img src={Message}></img>
          </S.MessageIcon>
          <S.TaskSubCount left="94px">{TestTask.MessageCount}</S.TaskSubCount>
          <S.DaysLeftIcon>
            <img src={DaysLeft}></img>
          </S.DaysLeftIcon>
          <S.TaskSubCount left="147px">{TestTask.DaysLeft}</S.TaskSubCount>
        </S.TaskMainStyle>

        <S.TaskMessageBox>
          <TaskMessage></TaskMessage>
        </S.TaskMessageBox>
      </S.TaskStyle>
    </>
  );
}

export default Task;
