import { createGlobalStyle } from 'styled-components';

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`;

export default GlobalFont;
