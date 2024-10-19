
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../graphql/schema.json",
  documents: "src/**/*.tsx",
  generates: {
    "./apollo/__generated__/client/": {
      preset: "client",
      plugins: []
    }
  },
  ignoreNoDocuments: true,
};

export default config;
