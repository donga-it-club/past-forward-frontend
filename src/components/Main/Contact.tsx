import { useState } from 'react';
import { PostMail } from '@/api/mailApi/postMail';
import RadioCheck from '@/assets/RadioCheck.png';
import * as S from '@/styles/Main/Contact.styles';

const Contact: React.FC = () => {
  const handleSend = async () => {
    try {
      const MailResponse = await PostMail({
        from: email,
        subject: subject,
        content: content,
        mailStatus: mailStatus,
      });

      console.log('메일 전송 성공', MailResponse);
      alert('문의가 전송되었습니다.');
    } catch (error) {
      console.error('실패', error);
    }
  };

  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [mailStatus, setMailStatus] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlesubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };
  const handlecontentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const handleMailStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMailStatus(event.target.value);
  };

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
            <S.EmailInput placeholder="이메일을 입력해주세요" value={email} onChange={handleEmailChange}></S.EmailInput>
          </S.EmailContainer>
          <S.SubjectContainer>
            <S.SubjectTitle>Select Subject?</S.SubjectTitle>
            <S.RadioContainer>
              <S.RadioInput
                type="radio"
                name="inquiryType"
                value="radio1"
                onChange={handleMailStatusChange}
                imageURL={RadioCheck}
              />
              <S.RadioLabel htmlFor="radio1">사이트 문의</S.RadioLabel>
              <S.RadioInput
                type="radio"
                name="inquiryType"
                value="radio2"
                onChange={handleMailStatusChange}
                imageURL={RadioCheck}
              />
              <S.RadioLabel htmlFor="radio2">제작자 문의</S.RadioLabel>
              <S.RadioInput
                type="radio"
                name="inquiryType"
                value="radio3"
                onChange={handleMailStatusChange}
                imageURL={RadioCheck}
              />
              <S.RadioLabel htmlFor="radio3">오류 문의</S.RadioLabel>
              <S.RadioInput
                type="radio"
                name="inquiryType"
                value="radio4"
                onChange={handleMailStatusChange}
                imageURL={RadioCheck}
              />
              <S.RadioLabel htmlFor="radio4">기타</S.RadioLabel>
            </S.RadioContainer>
          </S.SubjectContainer>
          <S.ContentTitleContainer>
            <S.ContentTitle>제목</S.ContentTitle>
            <S.ContentInput
              placeholder="제목을 입력해주세요"
              value={subject}
              onChange={handlesubjectChange}
            ></S.ContentInput>
          </S.ContentTitleContainer>
          <S.ContentTextBoxContainer>
            <S.ContentTextTitle>내용</S.ContentTextTitle>
            <S.ContentTextBox
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={handlecontentChange}
            ></S.ContentTextBox>
          </S.ContentTextBoxContainer>
          <S.ButtonContainer>
            <S.Button onClick={handleSend}>Send Message</S.Button>
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
