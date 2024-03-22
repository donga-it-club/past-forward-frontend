import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ErrorBoundary>,
);
