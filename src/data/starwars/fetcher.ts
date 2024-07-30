import { fetchThatMightDelay } from '@/utils/fetch';
import type { QueryFunctionContext } from '@tanstack/react-query';
import { stripIgnoredCharacters } from 'graphql';
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
const client = new GraphQLClient(endpoint);

export const customFetcher = <
  TData,
  TVariables extends Record<string, unknown>,
>(
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers'],
): ((context?: QueryFunctionContext) => Promise<TData>) => {
  return async (context?: QueryFunctionContext) => {
    const signal = context?.signal;
    const response = await fetchThatMightDelay(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: stripIgnoredCharacters(query),
        variables,
        header: requestHeaders,
      }),
      signal,
    });
    const result = await response.json();
    return result.data as TData;
    // return client.request<TData>({
    //   document: stripIgnoredCharacters(query),
    //   variables,
    //   requestHeaders,
    //   signal,
    // });
  };
};
