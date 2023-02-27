export const parseApiResponse = async (res: Response) => {
  if (!res.ok || (res.status < 200 || res.status > 399)) {
    return Promise.reject(res);
  }

  const result = await res.json();

  return Promise.resolve(result);
};

// URL FORMAT
// "https://swapi.dev/api/planets/1/"
export const getIdFromUrl = (url: string) => {
  const stringId = url
    .split('/')
    .filter(Boolean) // strip off '' in case of url without '/' at the end
    .at(-1) as string;

  // TODO: Here's something that I consider type unsefty and if I had more times I'd check for result to be NAN and return null
  return parseInt(stringId); 
};
