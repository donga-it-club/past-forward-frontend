import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './styles/theme';
import { msWorker } from '@/mocks/handlers';

if (process.env.NODE_ENV === 'development') {
  msWorker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ErrorBoundary>,
);
