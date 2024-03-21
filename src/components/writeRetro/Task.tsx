import image from '@/assets/Avatar Image.png';
import DaysLeft from '@/assets/access_alarms.png';
import Message from '@/assets/message.png';
import ThumbUp from '@/assets/thumb_up.png';
import SubTask from '@/components/writeRetro/SubTask';
import TaskMessage from '@/components/writeRetro/TaskMessage';
import * as S from '@/styles/writeRetroStyles/Task.style';

// 테스트용 객체
// ThumbUpCount, MessageCount, DaysLeft, count는 어떻게 전달되는지 확인하고 수정하기(string 또는 number로 받음)
const TestTask = {
  UserName: '홍길동',
  userProfile: '유저 이미지',
  TaskTitle: '노션의 페이지 작성을 잘했다.',
  ThumbUpCount: '4',
  MessageCount: '3',
  DaysLeft: '2 Hours ago',
};

function Task() {
  return (
    <>
      <S.TaskStyle>
        <S.TaskMainStyle>
          <S.TaskTop>
            <S.TaskUserProfile>
              <img src={image}></img>
            </S.TaskUserProfile>
            <S.TaskUserNameStyle>{TestTask.UserName}</S.TaskUserNameStyle>
          </S.TaskTop>

          <S.TaskTitleStyle>{TestTask.TaskTitle}</S.TaskTitleStyle>

          <S.SubTaskBox>
            <SubTask image={ThumbUp} count={TestTask.ThumbUpCount}></SubTask>
            <SubTask image={Message} count={TestTask.MessageCount}></SubTask>
            <SubTask image={DaysLeft} count={TestTask.DaysLeft}></SubTask>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        <S.TaskMessageBox>
          <TaskMessage count={TestTask.MessageCount}></TaskMessage>
        </S.TaskMessageBox>
      </S.TaskStyle>
    </>
  );
}

export default Task;
