'use strict';

const withWrapper = WrappedComponent => props => {
  const {views} = props;

  if (views > 1000) {
    return (
      <Popular>
        <WrappedComponent {...props}/>
      </Popular>
    )
  } else if (views < 100) {
    return (
      <New>
        <WrappedComponent {...props}/>
      </New>
    )
  } else {
    return <WrappedComponent {...props}/>
  }
};

const
  WrappedVideo = withWrapper(Video),
  WrappedArticle = withWrapper(Article);

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <WrappedVideo {...item} />
        );

      case 'article':
        return (
          <WrappedArticle {...item} />
        );
    }
  });
};
