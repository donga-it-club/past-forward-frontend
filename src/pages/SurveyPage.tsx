import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { Text, Button, Divider } from '@chakra-ui/react';
import { PostSurvey } from '@/api/survey/postSurvey';
import AgeInput from '@/components/survey/AgeInput';
import CityRadio from '@/components/survey/CityRadio';
import GenderRadio from '@/components/survey/GenderRadio';
import JobSelect from '@/components/survey/JobSelect';
import PathRadio from '@/components/survey/PathRadio';
import PurposeCheckbox from '@/components/survey/PurposeCheckbox';
import * as S from '@/styles/survey/SurveyPage.style';

const SurveyPage: React.FC = () => {
  const [surveySuccess, setSurveySuccess] = useState<boolean>(false);
  // const navigate = useNavigate();
  // if (surveySuccess === true) {
  //   navigate('https://www.pastforward.link');
  // } else {
  //   navigate('/survey');
  // }

  useEffect(() => {
    localStorage.setItem('surveyVisited', 'true');
  }, []);

  // const navigate = useNavigate();

  const handleSurveyButtonClick = () => {
    handleSurvey();
  };

  const handleSurvey = async () => {
    try {
      if (surveySuccess === false) {
        const SurveyRequest = await PostSurvey({
          age: numAge,
          gender: gender,
          occupation: job,
          region: city,
          source: path,
          purposes: purpose,
        });
        console.log('설문조사 전송 성공', SurveyRequest);
        setSurveySuccess(prev => !prev);
        console.log(surveySuccess);
        alert('설문조사가 전송되었습니다.');
      }
    } catch (error) {
      // navigate('/');
      console.error('실패입니다.', error);
    }
  };

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('FEMALE');
  const [job, setJob] = useState<string>('');
  const [city, setCity] = useState<string>('서울');
  const [path, setPath] = useState<string>('블라인드');
  const [purpose, setPurpose] = useState<string[]>();

  const handleAgeChange = (age: string) => {
    setAge(age);
  };
  const numAge: number = parseInt(age, 10);
  const handleGenderChange = (gender: string) => {
    setGender(gender);
  };
  const handleJobChange = (job: string) => {
    setJob(job);
  };
  const handleCityChange = (city: string) => {
    setCity(city);
  };
  const handlePathChange = (path: string) => {
    setPath(path);
  };
  const handlePurposeChange = (purpose: string[]) => {
    setPurpose(purpose);
  };

  return (
    <>
      <S.Background>
        <S.WhiteContainer>
          <Text fontSize="2xl" as="b" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
            설문조사
          </Text>
          <AgeInput onAgeChange={handleAgeChange} />
          <Divider />
          <GenderRadio onGenderChange={handleGenderChange} />
          <Divider />
          <JobSelect onJobChange={handleJobChange} />
          <Divider />
          <CityRadio onCityChange={handleCityChange} />
          <Divider />
          <PathRadio onPathChange={handlePathChange} />
          <Divider />
          <PurposeCheckbox onPurposeChange={handlePurposeChange} />

          <Button
            onClick={handleSurveyButtonClick}
            colorScheme="brand"
            width="80%"
            style={{ marginBottom: '4rem' }}
            id="survey_submit"
          >
            {/* <Link to="https://www.pastforward.link/">제출</Link> */}
            {/* <Link to={navigate}>제출</Link> */}
            <Link to={surveySuccess ? 'https://www.pastforward.link' : '/survey'}>제출</Link>
          </Button>
        </S.WhiteContainer>
      </S.Background>
    </>
  );
};

export default SurveyPage;
