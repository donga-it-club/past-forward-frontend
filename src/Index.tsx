import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { mswWorker as mswWorker } from './mocks/handlers';
import theme from './styles/theme';

if (process.env.NODE_ENV === 'development') {
  mswWorker.start();
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ErrorBoundary>,
);
