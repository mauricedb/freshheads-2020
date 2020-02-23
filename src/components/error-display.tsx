import React, { ErrorInfo } from "react";

type Props = {
  error: Error;
  errorInfo: ErrorInfo | null;
};

const ErrorDisplay: React.FC<Props> = ({ error, errorInfo }) => {
  return (
    <div style={{ color: "red" }}>
      <h2>{error.message}</h2>
      <hr />
      <pre>{error.stack}</pre>
      <hr />
      <pre>{errorInfo?.componentStack}</pre>
    </div>
  );
};

export default ErrorDisplay;
