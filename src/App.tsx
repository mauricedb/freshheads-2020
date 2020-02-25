import React, { Suspense } from "react";
import "./App.css";

// import Jokes from "./components/jokes-class";
// import Jokes from "./components/jokes-hook";
import Jokes from "./components/jokes-resource";
import { ErrorBoundary, ErrorDisplay, Loading } from "./components/shared";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setDisplayJokes(!displayJokes)}>
          {displayJokes ? "Hide jokes" : "Display jokes"}
        </button>
      </div>

      {/* {displayJokes && <Jokes url="/api/jon-skeet.json" />} */}

      <ErrorBoundary fallback={<ErrorDisplay />}>
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
