import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './awsConfig';
import MainLayout from './components/layout/MainLayout';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import SubLayout from '@/components/layout/PageSubLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import CreateRetroPage from '@/pages/CreateRetroPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import MyPage from '@/pages/MyPage';
import RegisterPage from '@/pages/RegisterPage';
import SurveyPage from '@/pages/SurveyPage';
import { WriteRetroPersonalPage } from '@/pages/WriteRetroPersonalPage';
import { WriteRetroRevisePersonalPage } from '@/pages/WriteRetroRevisePersonalPage';
import { WriteRetroReviseTeamPage } from '@/pages/WriteRetroReviseTeamPage';
import { WriteRetroTeamPage } from '@/pages/WriteRetroTeamPage';

Amplify.configure(awsConfig);

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SubLayout />}>
            <Route path="/create" element={<CreateRetroPage />}></Route>
            <Route path="/invite" element={<InviteTeamModal />}></Route>
            <Route path="/WriteRetroTeamPage" element={<WriteRetroTeamPage />}></Route>
            <Route path="/WriteRetroPersonalPage" element={<WriteRetroPersonalPage />}></Route>
            <Route path="/WriteRetroReviseTeamPage" element={<WriteRetroReviseTeamPage />}></Route>
            <Route path="/WriteRetroRevisePersonalPage" element={<WriteRetroRevisePersonalPage />}></Route>
          </Route>
          <Route element={<ProfileLayout />}>
            <Route path="/my" element={<MyPage />}></Route>
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/survey" element={<SurveyPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
