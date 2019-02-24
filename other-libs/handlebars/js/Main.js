const Articles = ({articles}) => {
  return (
    <div>
      {articles.map(element => {
        return <Article key={element.id} article={element}/>;
      })}
    </div>
  )
};

ReactDOM.render(
  <Articles articles={articles}/>,
  document.querySelector('main.container')
);
