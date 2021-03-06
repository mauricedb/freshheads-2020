import React from "react";
import { ErrorDisplay, Loading } from "./shared";
import { Joke, JokesProps } from "./types";

type State = { loading: boolean; jokes: Joke[]; error: any };

class Jokes extends React.Component<JokesProps, State> {
  state = {
    loading: false,
    jokes: [],
    error: null as any
  };

  async componentDidMount() {
    const { url } = this.props;

    try {
      const rsp = await fetch(url);
      const jokes = await rsp.json();
      this.setState({ jokes, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { loading, jokes, error } = this.state;

    if (loading || !jokes) {
      return <Loading />;
    }

    if (error && error.message) {
      return <ErrorDisplay error={error} />;
    }
    return (
      <div>
        <h2>Jon Skeet Jokes using a Class</h2>

        <ul>
          {jokes.map((item: Joke) => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Jokes;
