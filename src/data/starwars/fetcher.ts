import type { QueryFunctionContext } from '@tanstack/react-query';
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
    return client.request<TData>({
      document: query,
      variables,
      requestHeaders,
      signal,
    });
  };
};
