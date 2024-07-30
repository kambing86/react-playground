import { fetchThatMightDelay } from '@/utils/fetch';

export const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

export const graphqlRequest = async (query: string, variables?: any) => {
  const response = await fetchThatMightDelay(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return response;
};
