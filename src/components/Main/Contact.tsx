import RadioCheck from '@/assets/RadioCheck.png';
import * as S from '@/styles/Main/Contact.styles';

const Contact: React.FC = () => {
  return (
    <div style={{ height: '100vh', paddingLeft: '115px', paddingRight: '115px' }}>
      <S.Container>
        <S.TitleContainer>
          <S.Title>Contact</S.Title>
        </S.TitleContainer>
        <S.Poster>
          <S.PosterTitle>Past Forward</S.PosterTitle>
          <S.PosterText>Say something to start a chat!</S.PosterText>
          <S.CircleBig></S.CircleBig>
          <S.CircleSmall></S.CircleSmall>
        </S.Poster>
        <S.TextContainer>
          <S.EmailContainer>
            <S.EmailTitle>Email</S.EmailTitle>
            <S.EmailInput placeholder="이메일을 입력해주세요"></S.EmailInput>
          </S.EmailContainer>
          <S.SubjectContainer>
            <S.SubjectTitle>Select Subject?</S.SubjectTitle>
            <S.RadioContainer>
              <S.RadioInput type="radio" name="inquiryType" imageURL={RadioCheck} />
              <S.RadioLabel htmlFor="radio1">사이트 문의</S.RadioLabel>
              <S.RadioInput type="radio" name="inquiryType" imageURL={RadioCheck} />
              <S.RadioLabel htmlFor="radio2">제작자 문의</S.RadioLabel>
              <S.RadioInput type="radio" name="inquiryType" imageURL={RadioCheck} />
              <S.RadioLabel htmlFor="radio3">오류 문의</S.RadioLabel>
              <S.RadioInput type="radio" name="inquiryType" imageURL={RadioCheck} />
              <S.RadioLabel htmlFor="radio4">기타</S.RadioLabel>
            </S.RadioContainer>
          </S.SubjectContainer>
          <S.ContentTitleContainer>
            <S.ContentTitle>제목</S.ContentTitle>
            <S.ContentInput placeholder="제목을 입력해주세요"></S.ContentInput>{' '}
          </S.ContentTitleContainer>
          <S.ContentTextBoxContainer>
            <S.ContentTextTitle>내용</S.ContentTextTitle>
            <S.ContentTextBox placeholder="내용을 입력해주세요"></S.ContentTextBox>
          </S.ContentTextBoxContainer>
          <S.ButtonContainer>
            <S.Button>Send Message</S.Button>
            <S.ButtonText>· 답변은 작성하신 이메일로 전송됩니다.</S.ButtonText>
          </S.ButtonContainer>
        </S.TextContainer>
      </S.Container>
      <S.ContactButtonContainer>
        <S.ContactButton>회고 무료로 시작하기</S.ContactButton>
      </S.ContactButtonContainer>
    </div>
  );
};

export default Contact;
