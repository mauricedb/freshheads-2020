import React from "react";
import { Joke, JokesProps } from "./types";
import fetchResource from "./fetch-resource";

const Jokes: React.FC<JokesProps> = ({ url }) => {
  const jokes = fetchResource.read(url);

  return (
    <div>
      <h2>Jon Skeet Jokes using Resource</h2>

      <ul>
        {jokes.map((item: Joke) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
