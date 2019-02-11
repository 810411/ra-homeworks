'use strict';

const withWrapper = WrappedComponent => {
  return class extends React.Component {

    static get displayName() {
      const name = WrappedComponent.displayName ||
        WrappedComponent.name || 'Component';
      return `WithWrapper(${name})`;
    }

    render() {
      const {views} = this.props;

      if (views > 1000) {
        return (
          <Popular>
            <WrappedComponent {...this.props}/>
          </Popular>
        )
      } else if (views < 100) {
        return (
          <New>
            <WrappedComponent {...this.props}/>
          </New>
        )
      }

      return <WrappedComponent {...this.props}/>
    }
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
