import { SectionsContainer, Section } from 'react-fullpage';
import About from '@/components/Main/About';
import Contact from '@/components/Main/Contact';
import Home from '@/components/Main/Home';
import Template1 from '@/components/Main/Template1';
import Template2 from '@/components/Main/Template2';
import Template3 from '@/components/Main/Template3';
import Template4 from '@/components/Main/Template4';
import * as S from '@/styles/Main/HomePage.styles';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const options = {
    anchors: ['Home', 'Template', 'Template2', 'Template3', 'Template4', 'AboutUs', 'Contact'],
  };

  return (
    <>
      <S.Container>
        <SectionsContainer {...options}>
          <div>
            <Section>
              <Home />
              <div>
                <h1>Welcom to Roobits</h1>
                <div>소중한 사람들과 추억을 남겨보세요!</div>
                <div>D-Day를 더 특별하게 만들어 드립니다.</div>
              </div>
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
            </Section>
          </div>
        </SectionsContainer>
      </S.Container>
    </>
  );
};

export default App;
