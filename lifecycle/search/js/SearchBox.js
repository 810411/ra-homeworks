class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition)
  }

  render() {
    return <SearchBoxView
      searchBoxRef={el => {this.searchBox = el}}
      fixed={this.state.fixed} />
  }

  isFixed() {
    return this.searchBox.offsetTop < window.scrollY
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })
  }
}
