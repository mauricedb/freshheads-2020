import React from "react";
import Loading from "./loading";
import useFetch from "./use-fetch";

type Joke = { id: number; joke: string };
type Props = { url: string };
type State = { loading: boolean; jokes: Joke[]; error: any };

class Jokes extends React.Component<Props, State> {
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
      console.log(error);
      return <div>{error.message}</div>;
    }
    return (
      <div>
        <h2>Jon Skeet Jokes</h2>
        <ul>
          {jokes.map((item: Joke) => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// const Jokes: React.FC<Props> = ({ url }) => {
//   const { loading, data: jokes } = useFetch<Joke[]>(url);

//   if (loading || !jokes) {
//     return <Loading />;
//   }

//   return (
//     <div>
//       <h2>Jon Skeet Jokes</h2>
//       <ul>
//         {jokes.map((item: Joke) => (
//           <li key={item.id}>{item.joke}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default Jokes;
