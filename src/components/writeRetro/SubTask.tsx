import * as S from '../../styles/writeRetroStyles/SubTask.style';

type SubTaskProps = {
  image: string;
  count: string;
};

function SubTask({ image, count }: SubTaskProps) {
  return (
    <>
      <S.SubTaskStyle>
        <S.SubTaskIconBox>
          <S.SubTaskIcon>
            <img src={image}></img>
          </S.SubTaskIcon>
        </S.SubTaskIconBox>
        <S.TaskSubCount>{count}</S.TaskSubCount>
      </S.SubTaskStyle>
    </>
  );
}

export default SubTask;
