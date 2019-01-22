class App extends React.Component{
  state = {
    active: this.props.options[0],
    open: false
  };

  handleChange = option => {
    this.setState({
      active: option
    });
  };

  toggleOpen = () => {
    const changedOpen = !this.state.open;

    this.setState({
      open: changedOpen
    });
  };

  render () {
    return (
      <div className="container">
        <div className={`dropdown-wrapper ${this.state.open ? "open" : ""}`} >
          <button className={"btn"} onClick={this.toggleOpen} >
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          <ul className="dropdown">
            {this.props.options.map((option, i) => (
              <li
                className={option === this.state.active ? "active" : ""}
                onClick={() => this.handleChange(option)} >
                <a href="#">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
