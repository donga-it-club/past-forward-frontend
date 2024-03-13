import ReactDOM from 'react-dom';
import App from '@/App';
import ErrorBoundary from './components/ErrorBoundary';
import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { colors } from './styles/@colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const appStyles = {
  maxWidth: '768px',
  paddingX: '12px',
  headerHeight: { base: '48px', md: '56px' },
  asideHeight: '56px',
} as const;

const styles = {
  global: {
    body: {
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  styles,
  appStyles,
});

export default theme;

ReactDOM.render(
  <ErrorBoundary>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
