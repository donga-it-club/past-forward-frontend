import styled from 'styled-components';

export const Background = styled.div`
  background-color: #111b47;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;
export const SocialLoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  margin-top: 2rem;
`;

export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
