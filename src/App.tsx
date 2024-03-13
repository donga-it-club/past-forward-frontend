import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import GlobalStyle from '@/styles/fonts/GlobalStyle';
import GlobalFont from '@/styles/fonts/GlobalFont';
import CreateRetroPage from '@/pages/CreateRetroPage';
import WriteRetroTeamPage from '@/pages/WriteRetroTeamPage';
import MyPage from '@/pages/MyPage';
import Layout from './components/layout/PageLayout';

const App: React.FC = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateRetroPage />} />
            <Route path="/WriteRetroTeamPage" element={<WriteRetroTeamPage />} />
            <Route path="/my" element={<MyPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
