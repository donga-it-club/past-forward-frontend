import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import GlobalStyle from '@/styles/fonts/GlobalStyle';
import GlobalFont from '@/styles/fonts/GlobalFont';
import CreateRetroPage from '@/pages/CreateRetroPage';
import WriteRetroTeamPage from '@/pages/WriteRetroTeamPage';
import MyPage from '@/pages/MyPage';
import SubLayout from '@/components/layout/PageSubLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import MainLayout from './components/layout/MainLayout';

const App: React.FC = () => {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<SubLayout />}>
            <Route path="/create" element={<CreateRetroPage />}></Route>
            <Route path="/WriteRetroTeamPage" element={<WriteRetroTeamPage />}></Route>
          </Route>
          <Route element={<ProfileLayout />}>
            <Route path="/my" element={<MyPage />}></Route>
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
