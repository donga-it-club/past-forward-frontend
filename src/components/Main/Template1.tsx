import CategoryIcon1 from '@/assets/CategoryIcon1.png';
import CategoryIcon1_W from '@/assets/CategoryIcon1_W.png';
import CategoryIcon2 from '@/assets/CategoryIcon2.png';
import CategoryIcon2_W from '@/assets/CategoryIcon2_W.png';
import CategoryIcon3 from '@/assets/CategoryIcon3.png';
import CategoryIcon3_W from '@/assets/CategoryIcon3_W.png';
import CategoryIcon4 from '@/assets/CategoryIcon4.png';
import CategoryIcon4_W from '@/assets/CategoryIcon4_W.png';
import CategoryIcon5 from '@/assets/CategoryIcon5.png';
import CategoryIcon5_W from '@/assets/CategoryIcon5_W.png';
import CheckIcon from '@/assets/Check.png';
import * as S from '@/styles/Main/Template1.styles';

const Template1: React.FC = () => {
  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>회고의 필요성</S.Title>
      </S.TitleBox>
      <S.SubtitleBox>
        <S.SubTitle>프로젝트에서 왜 회고가 필요할까?</S.SubTitle>
      </S.SubtitleBox>
      <S.CategoryTitle>
        <S.CategoryBox>
          <S.CheckIcon src={CheckIcon} />팀 성장 촉진
        </S.CategoryBox>
        <S.CategoryBox>
          <S.CheckIcon src={CheckIcon} />
          문제 해결
        </S.CategoryBox>
        <S.CategoryBox>
          <S.CheckIcon src={CheckIcon} />
          프로세스 개선
        </S.CategoryBox>
        <S.CategoryBox>
          <S.CheckIcon src={CheckIcon} />
          팀워크 강화
        </S.CategoryBox>
        <S.CategoryBox>
          <S.CheckIcon src={CheckIcon} />
          적응력 향상
        </S.CategoryBox>
      </S.CategoryTitle>
      <S.HexagonWrapper>
        <S.Hexagon size={240}>
          <S.HexaIcon src={CategoryIcon1} />
          <S.HexaText>팀 성장 촉진</S.HexaText>
          <S.HoverTitleText className="HoverTitle">팀 성장 촉진</S.HoverTitleText>
          <S.HoverIcon className="HoverIcon" src={CategoryIcon1_W}></S.HoverIcon>
          <S.Divider className="Divider"></S.Divider>
          <S.HoverContentText className="HoverContent">
            회고는 팀원들이 과거 스프린트를 <br />
            돌아보며 성공 사례와 개선점을 <br />
            공유함으로서, 팀의 성장과 <br />
            학습을 촉진합니다.
          </S.HoverContentText>
        </S.Hexagon>
      </S.HexagonWrapper>
      <S.HexagonWrapper>
        <S.Hexagon size={240}>
          <S.HexaIcon src={CategoryIcon2} />
          <S.HexaText>문제 해결</S.HexaText>
          <S.HoverTitleText className="HoverTitle">문제 해결</S.HoverTitleText>
          <S.HoverIcon className="HoverIcon" src={CategoryIcon2_W}></S.HoverIcon>
          <S.Divider className="Divider"></S.Divider>
          <S.HoverContentText className="HoverContent">
            프로젝트를 진행하면서 발생한
            <br />
            문제들을 식별하고, 해결 방안을
            <br />
            모색하는 데 회고가 중요한
            <br />
            역할을 합니다.
          </S.HoverContentText>
        </S.Hexagon>
      </S.HexagonWrapper>
      <S.HexagonWrapper>
        <S.Hexagon size={240}>
          <S.HexaIcon src={CategoryIcon3} />
          <S.HexaText>프로세스 개선</S.HexaText>
          <S.HoverTitleText className="HoverTitle">프로세스 개선</S.HoverTitleText>
          <S.HoverIcon className="HoverIcon" src={CategoryIcon3_W}></S.HoverIcon>
          <S.Divider className="Divider"></S.Divider>
          <S.HoverContentText className="HoverContent">
            회고는 팀이 자신들의 작업 방식을
            <br /> 평가하고, 프로세스의 비효울성이나
            <br /> 문제점을 개선할 기회를
            <br /> 제공합니다.
          </S.HoverContentText>
        </S.Hexagon>
      </S.HexagonWrapper>
      <S.HexagonWrapper>
        <S.Hexagon size={240}>
          <S.HexaIcon src={CategoryIcon4} />
          <S.HexaText>팀워크 강화</S.HexaText>
          <S.HoverTitleText className="HoverTitle">팀워크 강화</S.HoverTitleText>
          <S.HoverIcon className="HoverIcon" src={CategoryIcon4_W}></S.HoverIcon>
          <S.Divider className="Divider"></S.Divider>
          <S.HoverContentText className="HoverContent">
            회고는 팀원들이 서로의 업무와
            <br /> 기여를 인정하고, 소통하는
            <br /> 기회를 마련합니다.
          </S.HoverContentText>
        </S.Hexagon>
      </S.HexagonWrapper>
      <S.HexagonWrapper>
        <S.Hexagon size={240}>
          <S.HexaIcon src={CategoryIcon5} />
          <S.HexaText>적응력 향상</S.HexaText>
          <S.HoverTitleText className="HoverTitle">적응력 향상</S.HoverTitleText>
          <S.HoverIcon className="HoverIcon" src={CategoryIcon5_W}></S.HoverIcon>
          <S.Divider className="Divider"></S.Divider>
          <S.HoverContentText className="HoverContent">
            회고를 통해 팀은 지난 기간 동안의
            <br />
            변화에 대한 대응을 평가하고,
            <br />
            미래의 변화에 더 잘 대응할 수
            <br />
            있습니다.
          </S.HoverContentText>
        </S.Hexagon>
      </S.HexagonWrapper>
    </S.Container>
  );
};

export default Template1;
