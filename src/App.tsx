import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundary, ErrorDisplay, Loading } from "./components/shared";

// import Jokes from "./components/jokes-class";
// import Jokes from "./components/jokes-hook";
import Jokes from "./components/jokes-resource";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setDisplayJokes(!displayJokes)}>
          {displayJokes ? "Hide jokes" : "Display jokes"}
        </button>
      </div>

      <ErrorBoundary fallback={<ErrorDisplay />}>
        <Suspense fallback={<Loading />}>
          {displayJokes && <Jokes url="/api/jon-skeet.json" />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
