import { graphql } from '../generated';

export const getArticle = graphql(`
	query Example($slug: String) {
		articles(filters: { slug: { eq: $slug } }) {
			blocks
			title
			description
			author {
				name
			}
			category {
				name
				slug
			}
		}
	}
`);
