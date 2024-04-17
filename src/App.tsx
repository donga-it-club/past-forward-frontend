import React, { ReactElement, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import { RecoilRoot } from 'recoil';
import RetroTeamPage from './pages/RetroTeamPage';
import RetroRevisePage from './pages/RevisePage';
import MainLayout from '@/components/layout/MainLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import AuthPage from '@/pages/AuthPage';
import CreateRetroPage from '@/pages/CreateRetroPage';
import HomePage from '@/pages/HomePage';
import MyPage from '@/pages/MyPage';
import RetroListPage from '@/pages/RetroListPage';
import RetroPersonalPage from '@/pages/RetroPersonalPage';
import SurveyPage from '@/pages/SurveyPage';

interface PrivateRouteProps {
  children: ReactElement;
}

// 로그인 상태 확인, 로그인 안 되어있는데 접근하면 "/" 로 리다이렉트함
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

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

const App = () => {
  const SurveyControl = () => {
    const checkSurveyVisited = () => {
      // localStorage에서 값을 가져오되, 없으면 'false'를 기본값으로 사용
      const visited = localStorage.getItem('surveyVisited');
      return visited !== null ? visited === 'true' : false;
    };

    const location = useLocation();

    useEffect(() => {
      // 추가적인 페이지 접근 로직이 필요하면 여기에 구현
    }, [location]);

    // surveyVisited 값이 'true'인 경우, 홈 페이지로 리다이렉트
    if (checkSurveyVisited()) {
      return <Navigate to="/" replace />;
    }
    // 그 외의 경우 (값이 'false'이거나 없는 경우), SurveyPage를 보여줌
    return <SurveyPage />;
  };

  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            {/* ProfileLayout */}
            <Route element={<ProfileLayout />}>
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <CreateRetroPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/my"
                element={
                  <PrivateRoute>
                    <MyPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/sections"
                element={
                  <PrivateRoute>
                    <RetroTeamPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/personal"
                element={
                  <PrivateRoute>
                    <RetroPersonalPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/revise"
                element={
                  <PrivateRoute>
                    <RetroRevisePage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/retrolist"
                element={
                  <PrivateRoute>
                    <RetroListPage />
                  </PrivateRoute>
                }
              />
            </Route>

            {/* MainLayout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
            </Route>

            {/* not Layout */}
            <Route path="/login" element={<AuthPage />} />
            <Route
              path="/survey"
              element={
                <PrivateRoute>
                  <SurveyControl />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default App;
