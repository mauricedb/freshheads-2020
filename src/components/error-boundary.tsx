import React, { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback: () => ReactNode;
};

class ErrorBoundary extends Component {
  render() {
    return <div></div>;
  }
}

export default ErrorBoundary;
