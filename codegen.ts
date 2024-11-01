import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:1337/graphql', // dev
	documents: ['graphql/**/*.ts'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'./graphql/generated/': {
			preset: 'client',
			plugins: [],
		},
	},
	config: {
		withHooks: true,
	},
};

export default config;
