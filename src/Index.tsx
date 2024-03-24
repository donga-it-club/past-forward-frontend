import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { mswWorker } from './mocks/handlers';
import theme from './styles/theme';

const enableMocking = async () => {
  if (process.env.NODE_ENV === 'development') {
    return mswWorker.start();
  }
  return Promise.resolve();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ErrorBoundary>,
  );
});
