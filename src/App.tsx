import React, { ReactElement, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import MainLayout from './components/layout/MainLayout';
import InviteTeamModal from '@/components/inviteTeam/InviteTeamModal';
import SubLayout from '@/components/layout/PageSubLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import AuthPage from '@/pages/AuthPage';
import CreateRetroPage from '@/pages/CreateRetroPage';
import HomePage from '@/pages/HomePage';
import MyPage from '@/pages/MyPage';
import SurveyPage from '@/pages/SurveyPage';
import { WriteRetroPersonalPage } from '@/pages/WriteRetroPersonalPage';
import { WriteRetroRevisePersonalPage } from '@/pages/WriteRetroRevisePersonalPage';
import { WriteRetroReviseTeamPage } from '@/pages/WriteRetroReviseTeamPage';
import { WriteRetroTeamPage } from '@/pages/WriteRetroTeamPage';

interface PrivateRouteProps {
  children: ReactElement;
}

// 로그인 상태 확인, 로그인 안 되어있는데 접근하면 "/" 로 리다이렉트함
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const location = useLocation();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      await getCurrentUser();
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsChecking(false);
    }
  };

  if (isChecking) {
    return <div>로딩 중...</div>; // 로그인 상태 확인 중
  }

  return isLoggedIn ? children : <Navigate to="/" replace state={{ from: location }} />;
};

// App 컴포넌트 수정
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SubLayout />}>
            <Route
              path="/create"
              element={
                <PrivateRoute>
                  <CreateRetroPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/invite"
              element={
                <PrivateRoute>
                  <InviteTeamModal />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/WriteRetroTeamPage"
              element={
                <PrivateRoute>
                  <WriteRetroTeamPage />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route element={<ProfileLayout />}>
            <Route
              path="/my"
              element={
                <PrivateRoute>
                  <MyPage />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
          <Route path="/login" element={<AuthPage />}></Route>
          <Route
            path="/survey"
            element={
              <PrivateRoute>
                <SurveyPage />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
