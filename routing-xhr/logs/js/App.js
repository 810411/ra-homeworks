const withFetch = WrappedComponent => {
  return class extends React.Component {
    state = {
      logs: []
    };

    static get displayName() {
      const name = WrappedComponent.displayName ||
        WrappedComponent.name || 'Component';
      return `WithFetch(${name})`;
    }

    componentDidMount() {
      fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=50')
        .then(response => response.json())
        .then(logs => this.setState({logs}));
    }

    render() {
      const {logs} = this.state;

      return (
        <WrappedComponent {...this.props} logs={logs}/>
      )
    }
  }
};

const Logs = ({logs}) => {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Текущие данные</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/archive">Архив</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Current logs={logs}/>
          </Route>
          <Route path="/archive">
            <Archive logs={logs}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

const App = withFetch(Logs);
