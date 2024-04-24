import { SectionsContainer, Section } from 'react-fullpage';
import About from '@/components/Main/About';
import Contact from '@/components/Main/Contact';
import Template1 from '@/components/Main/Template1';
import Template2 from '@/components/Main/Template2';
import Template3 from '@/components/Main/Template3';
import Template4 from '@/components/Main/Template4';
import MainDesign from '@/components/home/MainDesign';

const App = () => {
  const options = {
    anchors: ['Home', 'Template', 'Template2', 'Template3', 'Template4', 'AboutUs', 'Contact'],
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
        </Section>
      </SectionsContainer>
    </>
  );
};

export default App;
