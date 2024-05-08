import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // 로그인된 상태인지
  const checkLoginStatus = async () => {
    try {
      await getCurrentUser();
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  // 로그인 된 상태면 로그아웃 가능하게 함
  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      handleSignOut();
    } else {
      navigate('/login');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut({ global: true });
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.log('로그아웃 에러', error);
    }
  };

  return { isLoggedIn, handleLoginOrLogout };
};
