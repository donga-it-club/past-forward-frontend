import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import GlobalStyle from '@/styles/fonts/GlobalStyle';
import GlobalFont from '@/styles/fonts/GlobalFont';
import CreateRetroPage from '@/pages/CreateRetroPage';
import WriteRetroTeamPage from '@/pages/WriteRetroTeamPage';
import NavBar from './components/layouts/PageNavBar';

const App: React.FC = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateRetroPage />} />
            <Route path="/WriteRetroTeamPage" element={<WriteRetroTeamPage />} />
          </Routes>
        </NavBar>
      </Router>
    </>
  );
};

export default App;
