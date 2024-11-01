import { cacheExchange, createClient, fetchExchange } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
	return createClient({
		url: 'http://localhost:1337/graphql', // dev
		exchanges: [cacheExchange, fetchExchange],
	});
};

const { getClient } = registerUrql(makeClient);

export default getClient;
