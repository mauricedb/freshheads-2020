import React, { Suspense, ErrorInfo } from "react";
import "./App.css";
import Jokes from "./components/jokes";
import Loading from "./components/loading";
import ErrorBoundary from "./components/error-boundary";
import ErrorDisplay from "./components/error-display";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setDisplayJokes(!displayJokes)}>
          {displayJokes ? "Hide jokes" : "Display jokes"}
        </button>
      </div>

      <ErrorBoundary
        fallback={(error: Error, errorInfo: ErrorInfo | null) => (
          <ErrorDisplay error={error} errorInfo={errorInfo} />
        )}
      >
        <Suspense fallback={<Loading />}>
          {displayJokes && <Jokes url="/api/jon-skeet.json" />}
        </Suspense>
      </ErrorBoundary>

      <div style={{ display: "none" }}>
        <a
          href="http://timeslicing-unstable-demo.surge.sh/"
          target="async-demo"
        >
          Async demo
        </a>
      </div>
    </div>
  );
};

export default App;
