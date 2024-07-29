import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: './src/data/**/*.gql',
  generates: {
    'src/data/starwars/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        reactQueryVersion: 5,
        addSuspenseQuery: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        exposeQueryRootKeys: true,
        fetcher: '@/data/starwars/fetcher#customFetcher',
      },
    },
  },
};

export default config;
