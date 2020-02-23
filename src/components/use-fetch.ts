import React from "react";

const useFetch = <T extends any>(url: string) => {
  type State = {
    data: T | null;
    loading: boolean;
    error: any;
  };

  const [{ data, loading, error }, setState] = React.useState<State>({
    data: null,
    loading: true,
    error: null
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const rsp = await fetch(url);
        const data = await rsp.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error });
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
