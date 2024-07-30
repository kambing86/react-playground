export const fetchThatMightFail = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => {
  if (Math.random() > 0.5) {
    throw new Error('fetch failed');
  }
  return fetch(input, init);
};

export const fetchThatMightDelay = async (
  input: RequestInfo | URL,
  init?: RequestInit,
) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
  return fetch(input, init);
};
