const Article = ({article}) => {
  return (
    <article className="article">
      <h2>{article.subject}</h2>
      <p>{article.body}</p>
    </article>
  )
};
