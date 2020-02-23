import React, { Component, ReactNode, ErrorInfo, ReactElement } from "react";

type Props = {
  children: ReactNode;
  fallback: ReactElement;
};

type State = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

class ErrorBoundary extends Component<Props, State> {
  state = { error: null as Error | null, errorInfo: null as ErrorInfo | null };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      return React.cloneElement(fallback, { error, errorInfo });
    }

    return children;
  }
}

export default ErrorBoundary;
