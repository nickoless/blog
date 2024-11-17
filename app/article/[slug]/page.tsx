import getClient from '@/graphql/client';
import { getArticle } from '@/graphql/queries/getArticle';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// TODO: TAILWIND PROSE

const Article = async ({ params }: { params: { slug: string } }) => {
	const awaitParams = await params;
	const result = await getClient().query(getArticle, { slug: awaitParams.slug });
	const { data, error } = result;

	const articleData = data?.articles[0];

	if (error) return <p>Oh no... {error.message}</p>;

	return (
		<div className='flex items-center justify-center my-10'>
			<article className='prose lg:prose-xl'>
				<BlocksRenderer content={articleData?.blocks} />
			</article>
		</div>
	);
};

export default Article;
