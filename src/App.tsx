import React, { ReactElement, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import { RecoilRoot } from 'recoil';
import AcceptInvite from './components/inviteTeam/AcceptInvite';
import RetroRevisePage from './pages/RevisePage';
import RetroTeamPage from './pages/SectionPage';
import { FakeNoticeShowPageFirst, FakeNoticeShowPageSecond } from './pages/notice/FakeNoticeShowPage';
import MainLayout from '@/components/layout/MainLayout';
import ProfileLayout from '@/components/layout/ProfileLayout';
// import AcceptInvitePage from '@/pages/AccpetInvitePage';
import AuthPage from '@/pages/AuthPage';
import CreateRetroPage from '@/pages/CreateRetroPage';
import GroupBoard from '@/pages/GroupBoardPage';
import HomePage from '@/pages/HomePage';
import MyPage from '@/pages/MyPage';
import ProjectRetro from '@/pages/ProjectRetroPage';
import RetroListPage from '@/pages/RetroListPage';
import SurveyPage from '@/pages/SurveyPage';
import { NoticeShowPage } from '@/pages/notice/NoticeShowPage';
import { NoticeWritePage } from '@/pages/notice/NoticeWritePage';

interface PrivateRouteProps {
  children: ReactElement;
}

// 로그인 상태 확인, 로그인 안 되어있는데 접근하면 "/login" 로 리다이렉트함
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

  return isLoggedIn ? children : <Navigate to="/login" replace state={{ from: location.pathname }} />;
};

const App = () => {
  const SurveyControl = () => {
    const checkSurveyVisited = () => {
      // localStorage에서 값을 가져오되, 없으면 'false'를 기본값으로 사용
      const visited = localStorage.getItem('surveyVisited');
      return visited !== null ? visited === 'true' : false;
    };

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
              <Route
                path="/groups"
                element={
                  <PrivateRoute>
                    <ProjectRetro />
                  </PrivateRoute>
                }
              />
              <Route
                path="/group-boards"
                element={
                  <PrivateRoute>
                    <GroupBoard />
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
            <Route
              path="/noticeWrite"
              element={
                <PrivateRoute>
                  <NoticeWritePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/noticeShow"
              element={
                <PrivateRoute>
                  <NoticeShowPage />
                </PrivateRoute>
              }
            />

            {/* 가짜 게시물 페이지 */}
            <Route
              path="/noticeShowFirst"
              element={
                <PrivateRoute>
                  <FakeNoticeShowPageFirst />
                </PrivateRoute>
              }
            />
            <Route
              path="/noticeShowSecond"
              element={
                <PrivateRoute>
                  <FakeNoticeShowPageSecond />
                </PrivateRoute>
              }
            />
            {/* 발급 될 초대 링크 */}
            <Route path="/invitations" Component={AcceptInvite} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default App;
