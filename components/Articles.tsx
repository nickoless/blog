import getClient from '@/graphql/client';
import { getAllArticles } from '@/graphql/queries/getAllArticles';

const Articles = async () => {
	const result = await getClient().query(getAllArticles, {});
	const { data, error } = result;

	console.log('result;', result);

	if (error) return <p>Oh no... {error.message}</p>;

	return (
		<ul>
			{data.articles.map((article) => (
				<li>
					<a href={`article/${article.slug}`}>{article.title}</a>
				</li>
			))}
		</ul>
	);
};

export default Articles;
