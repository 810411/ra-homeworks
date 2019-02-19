class Site extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offices: []
    };

    this.getOffices = this.getOffices.bind(this);
  }

  componentWillMount() {
    this.getOffices();
  }

  render() {
    return (
      <div>
        <header className="info">
          <h1>Одна большая компания</h1>
          <p>Будем рады видеть вас в одном из наших офисов</p>
        </header>
        <main className="map">
          <Map points={this.state.offices} />
        </main>
        <button className="button" onClick={this.getOffices}>
          Обновить местоположение офисов
        </button>
      </div>
    );
  }

  getOffices() {
    this.setState({
      offices: new Array(random(1, 15, false))
        .fill(0)
        .map((undefined, index) => ({
          lon: random(-180, 180),
          lat: random(-90, 90),
          id: index
        }))
    });
  }
}

const random = (lower = 0, upper = 1, floating = true) =>
  floating
    ? Math.min(lower + Math.random() * (upper - lower), upper)
    : lower + Math.floor(Math.random() * (upper - lower + 1));
