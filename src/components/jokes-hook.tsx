import React from "react";
import { ErrorDisplay, Loading } from "./shared";
import { Joke, JokesProps } from "./types";
import useFetch from "./use-fetch";

const Jokes: React.FC<JokesProps> = ({ url }) => {
  const { loading, data: jokes, error } = useFetch<Joke[]>(url);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (loading || !jokes) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Jon Skeet Jokes using Hooks</h2>

      <ul>
        {jokes.map((item: Joke) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
