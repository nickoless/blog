const ArticleContent = async ({ slug }) => {
	let data = await fetch(`http://localhost:1337/api/article/${slug}?populate=*`);
	let articleContent = await data.json();

	let template;

	console.log(articleContent);

	return <ul></ul>;
};
export default ArticleContent;
