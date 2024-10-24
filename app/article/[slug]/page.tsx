import ArticleContent from '@/components/ArticleContent';

const Article = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	let data = await fetch(`http://localhost:1337/api/article/${slug}?populate=*`);
	let articleContent = await data.json();

	console.log(articleContent);

	let template;

	return <div>My Post: {slug}</div>;
};

export default Article;
