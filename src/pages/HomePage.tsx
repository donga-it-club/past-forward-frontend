import About from '@/components/Main/About';
import Contact from '@/components/Main/Contact';
import Template1 from '@/components/Main/Template1';
import Template2 from '@/components/Main/Template2';
import Template3 from '@/components/Main/Template3';
import Template4 from '@/components/Main/Template4';
import MainDesign from '@/components/home/MainDesign';
import { NoticeBoard } from '@/components/notice/NoticeBoard';

const App = () => {
  return (
    <div style={{ backgroundColor: 'rgb(247, 250, 252)' }}>
      <a id="Home">
        <MainDesign />
      </a>
      <a id="Overview">
        <Template1 />
      </a>
      <Template2 />
      <Template3 />
      <Template4 />
      <a id="AboutUs">
        <About />
      </a>
      <a id="Contact">
        <Contact />
      </a>
      <a id="Notice">
        <NoticeBoard />
      </a>
    </div>
  );
};

export default App;
