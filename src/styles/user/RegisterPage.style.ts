import styled from 'styled-components';

interface DividerProps {
  text: string; // text 속성 추가
}

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

export const Divider = styled.div<DividerProps>`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  margin: 1rem 0;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 0 1rem;
  }

  &::before {
    content: '${props => props.text}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 0 1rem;
    z-index: 1; /* ::before를 ::after보다 위에 렌더링 */
  }
`;
