import React from "react";
import "./App.css";
import Jokes from "./components/jokes";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setDisplayJokes(!displayJokes)}>
          {displayJokes ? "Hide jokes" : "Display jokes"}
        </button>
      </div>

      {displayJokes && <Jokes url="/api/jon-skeet.json" />}

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
