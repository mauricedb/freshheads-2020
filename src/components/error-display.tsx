import React from "react";

type Props = {
  error: any;
};

const ErrorDisplay: React.FC<Props> = ({ error }) => {
  return <div style={{ color: "red" }}>{error.message}</div>;
};

export default ErrorDisplay;
