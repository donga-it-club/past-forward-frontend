import FakeNoticeImgFirst from '@/assets/FakeNoticeImgFirst.png';
import FakeNoticeImgSecond from '@/assets/FakeNoticeImgSecond.png';
import * as S from '@/styles/notice/noticeShow.style';

export const FakeNoticeShowMainFirst = () => {
  return (
    <>
      <S.NoticeShowMainStyle>
        <div style={{ gridColumn: '2' }}>
          {/* 게시물 텍스트 */}
          <S.NoticeShowText>
            <p style={{ fontSize: '20px', fontWeight: '600' }}>
              # 순간을 있는 그대로 기록하는 방법 - 회고를 진행하는 사람의 회고에 대한 고찰
            </p>
            <img style={{ width: '70%', borderRadius: '5px', margin: '30px 0px' }} src={FakeNoticeImgFirst}></img>
            프로젝트 단위의 업무가 종료되면 각 DRI 별로 회고를 하게 된다. 아니, 해야한다. <br />
            DRI : 직접 책임자의 약자로, 어떤 과제와 관련해 문제가 생겼을 때 최종적으로 책임지는 사람 <br />
            <br />
            처음 프로젝트 단위로 일하고 나서 ‘회고’란 걸 하게 되었을 때 미팅 내내 땀만 줄줄 흘렸던 기억이 난다. 잘한
            점은 한 두줄, 개선해야 할 점은 수두룩하게 리스팀 되었고, 기획자인 내가 모든 매를 두드려 맞는 기분이었다.{' '}
            <br />
            그래서일까? 가끔은 그 매를 맞기 싫어서 회고를 건너뛴 적도 있고, 스프린트가 쉴 새 없이 바쁘게 돌아갈 때는
            회고가 사치처럼 느껴졌다. 이 역시도 지금 돌아보니 참 바보같이 비효율적으로 일했던 꼬꼬마 시절이였다. 회고
            없이 성장하는 건 거의 불가능하기 때문이다. 피한다고 될 일이 아니었다. <br />
            <br />
            회고란 무엇인가? <br />
            단순히 ‘돌아보는 게’ 회고가 아니다. 무엇을 잘했고 잘못했고 에서 끝나는게 아니다. ‘앞으로 더 잘 하기 위해서’
            돌아보는 과정이다. 이후에 어떻게 더 잘 실행할 수 있을지 액션 플랜이 나오지 않는 회고는 시간낭비일 뿐이다.
          </S.NoticeShowText>
        </div>
      </S.NoticeShowMainStyle>
    </>
  );
};

export const FakeNoticeShowMainSecond = () => {
  return (
    <>
      <S.NoticeShowMainStyle>
        <div style={{ gridColumn: '2' }}>
          {/* 게시물 텍스트 */}
          <S.NoticeShowText>
            <p style={{ fontSize: '20px', fontWeight: '600' }}>회고의 필요성</p>
            <br />
            프로젝트 회고는 프로젝트 완료 후 팀이 경험을 되돌아보고, 향후 프로젝트의 효율성을 높이기 위해 중요한
            과정입니다.
            <br /> <br />
            <br />
            <p style={{ fontSize: '20px', fontWeight: '600' }}>학습과 성장의 기회 제공</p>
            프로젝트 회고는 팀 구성원들이 프로젝트 동안 배운 점을 공유하고, 성과와 실수를 분석하는 과정을 통해 학습과
            성장을 도모합니다. <br />
            이를 통해 성공 사례를 반복하고, 실패로부터 교훈을 얻어 미래의 프로젝트에서 유사한 실수를 피할 수 있습니다.
            <br /> <br />
            <br />
            <p style={{ fontSize: '20px', fontWeight: '600' }}>팀의 협력과 소통 강화</p>
            회고 과정에서 팀원들은 서로의 의견을 듣고 문제 해결 방안을 모색하며, 협력과 소통을 강화합니다. 이는 팀 내
            소통을 촉진하고, 협력 관계를 강화하여 팀의 결속력을 높이는 데 기여합니다.
            <br /> <br />
            <br />
            결론적으로, 프로젝트 회고는 팀의 지속적인 성장과 발전을 위한 중요한 단계이며, 이를 통해 팀은 더 나은 성과를
            달성하고 성공적인 프로젝트를 반복적으로 완수할 수 있게 됩니다.
            <img style={{ width: '70%', borderRadius: '5px', margin: '30px 0px' }} src={FakeNoticeImgSecond}></img>
          </S.NoticeShowText>
        </div>
      </S.NoticeShowMainStyle>
    </>
  );
};
