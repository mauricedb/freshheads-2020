import React from "react";
import Loading from "./loading";
import useFetch from "./use-fetch";
import ErrorDisplay from "./error-display";
import createResource from "./create-resource";

type Joke = { id: number; joke: string };
type Props = { url: string };
type State = { loading: boolean; jokes: Joke[]; error: any };

// class Jokes extends React.Component<Props, State> {
//   state = {
//     loading: false,
//     jokes: [],
//     error: null as any
//   };

//   async componentDidMount() {
//     const { url } = this.props;
//     try {
//       const rsp = await fetch(url);
//       const jokes = await rsp.json();
//       this.setState({ jokes, loading: false });
//     } catch (error) {
//       this.setState({ error, loading: false });
//     }
//   }
//   render() {
//     const { loading, jokes, error } = this.state;

//     if (loading || !jokes) {
//       return <Loading />;
//     }

//     if (error && error.message) {
//       return <ErrorDisplay error={error} />;
//     }
//     return (
//       <div>
//         <h2>Jon Skeet Jokes</h2>
//         <ul>
//           {jokes.map((item: Joke) => (
//             <li key={item.id}>{item.joke}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// const Jokes: React.FC<Props> = ({ url }) => {
//   const { loading, data: jokes, error } = useFetch<Joke[]>(url);

//   if (error) {
//     return <ErrorDisplay error={error} />;
//   }

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

const fetchResource = createResource(async (url: string) => {
  const rsp = await fetch(url);
  const data = await rsp.json();

  return data;
});

const Jokes: React.FC<Props> = ({ url }) => {
  const jokes = fetchResource.read(url);

  // const { loading, data: jokes, error } = useFetch<Joke[]>(url);

  // if (error) {
  //   return <ErrorDisplay error={error} />;
  // }

  // if (loading || !jokes) {
  //   return <Loading />;
  // }

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
};

export default Jokes;
