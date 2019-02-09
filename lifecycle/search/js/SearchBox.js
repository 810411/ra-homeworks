class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fixed: false};
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition)
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed}/>
  }

  isFixed() {
    const searchBoxTopPosition = document
      .querySelector('.search-box')
      .getBoundingClientRect()
      .top;

    return searchBoxTopPosition < window.scrollY
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })
  }
}
