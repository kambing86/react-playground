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
  const payload =
    init != null && typeof init.body === 'string'
      ? JSON.parse(init.body)
      : null;
  if (payload.variables?.id === 'ZmlsbXM6Mw==') {
    await new Promise((resolve, reject) => {
      init?.signal?.addEventListener('abort', () => {
        reject('cancelled');
      });
      setTimeout(resolve, 3000);
    });
  }
  if (init?.signal?.aborted) throw new Error('cancelled');
  return fetch(input, init);
};
