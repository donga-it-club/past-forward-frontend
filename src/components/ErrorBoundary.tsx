import { Component, ErrorInfo, PropsWithChildren } from 'react';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren, State> {
  public state = {
    hasError: false,
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('ErrorBoundary / componentDidCatch', error, info);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Something went wrong :(</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
