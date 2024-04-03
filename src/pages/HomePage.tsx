
import { SectionsContainer, Section } from 'react-fullpage';
import MainDesign from '@/components/home/MainDesign';
import About from '@/components/Main/About';
import Contact from '@/components/Main/Contact';
import Home from '@/components/Main/Home';
import Template1 from '@/components/Main/Template1';
import Template2 from '@/components/Main/Template2';
import Template3 from '@/components/Main/Template3';
import Template4 from '@/components/Main/Template4';
import * as S from '@/styles/Main/HomaPage.styles';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const options = {
    anchors: ['Home', 'Template', 'Template2', 'Template3', 'Template4', 'AboutUs', 'Contact'],
    scrollBar: false,
  };

  return (
    <>
      <SectionsContainer {...options}>
        <Section>
         <MainDesign />
        </Section>
        <Section>
          <Template1 />
        </Section>
        <Section>
          <Template2 />
        </Section>
        <Section>
          <Template3 />
        </Section>
        <Section>
          <Template4 />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Contact />
          <S.ButtonContainer>
            <S.Button>회고 무료로 시작하기</S.Button>
          </S.ButtonContainer>
        </Section>
      </SectionsContainer>

    </>
  );
};

export default App;
