import createResource from "./create-resource";

const fetchResource = createResource(async (url: string) => {
  const rsp = await fetch(url);
  const data = await rsp.json();

  return data;
});

export default fetchResource;
