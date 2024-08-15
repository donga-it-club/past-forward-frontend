import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostMail } from '@/api/mailApi/postMail';
import RadioCheck from '@/assets/RadioCheck.png';
import { useAuth } from '@/hooks/useAuth';
import * as S from '@/styles/Main/Contact.styles';

const Contact: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/create');
  };

  const handleSendButtonClick = () => {
    handleSend();
  };

  const handleSend = async () => {
    try {
      await PostMail({
        from: email,
        subject: subject,
        content: content,
        mailStatus: mailStatus,
      });
      alert('문의가 정상적으로 전송되었습니다. 입력하신 이메일로 빠른 시일 내에 답변 드리도록 하겠습니다');
    } catch (error) {
      console.error('실패입니다.', error);
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
  const handlecontentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };
  const handleMailStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMailStatus(event.target.value);
  };

  return (
    <div style={{ height: '100vh' }}>
      <S.Container>
        <S.TitleContainer>
          <S.Title>건의 및 문의사항</S.Title>
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
            <S.EmailInput
              placeholder="문의 답변을 받을 이메일을 입력해주세요"
              value={email}
              onChange={handleEmailChange}
            ></S.EmailInput>
          </S.EmailContainer>

          <S.SubjectContainer>
            <S.SubjectTitle>Select Subject?</S.SubjectTitle>
            <S.RadioContainer>
              <S.RadioStyle>
                <S.RadioInput
                  type="radio"
                  name="inquiryType"
                  value="SITE"
                  onChange={handleMailStatusChange}
                  imageURL={RadioCheck}
                />

                <S.RadioLabel htmlFor="radio1">사이트 문의</S.RadioLabel>
              </S.RadioStyle>
              <S.RadioStyle>
                <S.RadioInput
                  type="radio"
                  name="inquiryType"
                  value="CREATOR"
                  onChange={handleMailStatusChange}
                  imageURL={RadioCheck}
                />

                <S.RadioLabel htmlFor="radio2">제작자 문의</S.RadioLabel>
              </S.RadioStyle>
              <S.RadioStyle>
                <S.RadioInput
                  type="radio"
                  name="inquiryType"
                  value="ERROR"
                  onChange={handleMailStatusChange}
                  imageURL={RadioCheck}
                />

                <S.RadioLabel htmlFor="radio3">오류 문의</S.RadioLabel>
              </S.RadioStyle>
              <S.RadioStyle>
                <S.RadioInput
                  type="radio"
                  name="inquiryType"
                  value="OTHER"
                  onChange={handleMailStatusChange}
                  imageURL={RadioCheck}
                />

                <S.RadioLabel htmlFor="radio4">기타</S.RadioLabel>
              </S.RadioStyle>
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
              rows={4}
            ></S.ContentTextBox>
          </S.ContentTextBoxContainer>

          <S.ButtonContainer>
            <S.Button onClick={handleSendButtonClick}>Send Message</S.Button>
            <S.ButtonText>· 답변은 작성하신 이메일로 전송됩니다.</S.ButtonText>
          </S.ButtonContainer>
        </S.TextContainer>
      </S.Container>

      <S.ContactButtonContainer>
        <S.ContactButton
          onClick={navigateToCreate}
          id={isLoggedIn ? 'contact_startpf_login' : 'contact_startpf_logout'}
        >
          지금 회고 시작하기
        </S.ContactButton>
      </S.ContactButtonContainer>
    </div>
  );
};

export default Contact;
