import { graphql } from '../generated';

export const getAllArticles = graphql(`
	query getAllArticles {
		articles {
			author {
				name
			}
			slug
			title
			createdAt
		}
	}
`);
