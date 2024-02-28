import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root{
    font-family: "pretendard";
  }
`;

export default GlobalStyle;
