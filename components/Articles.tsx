export default async function Articles() {
	let data = await fetch('http://localhost:1337/api/articles');
	let articles = await data.json();

	let template;

	if (articles) {
		const articlesElement = articles.data?.map((article) => (
			<li key={article.id}>{article.title}</li>
		));

		template = articlesElement;
	} else {
		template = <></>;
	}
	return <ul>{template}</ul>;
}
