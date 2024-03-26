import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import SubLayout from '@/components/layout/PageSubLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import CreateRetroPage from '@/pages/CreateRetroPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import MyPage from '@/pages/MyPage';
import RegisterPage from '@/pages/RegisterPage';
import WriteRetroTeamPage from '@/pages/WriteRetroTeamPage';

const App = () => {
  return (
    <>
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
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
