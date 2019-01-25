function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const ChartsItem = ({colors, itemIndex, item, type, sum, max, horizontal, serie, sortedSerie}) => {
  const
    color = colors[itemIndex],
    size = item / (type === 'stacked' ? sum : max) * 100;

  const style = {
    backgroundColor: color,
    opacity: type === 'stacked' ? 1 : item / max + .05,
    zIndex: item,
  };

  if (horizontal) {
    style.width = size + '%'
  } else if (type === "layered") {
    style.height = size + '%';
    style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
  } else {
    style.height = size + '%';
  }

  return (
    <div
      className={`Charts--item ${type}`}
      style={style}
      key={itemIndex}
    >
      <b style={{color: color}}>{item}</b>
    </div>
  )
};

const ChartsSerie = ({serie, type, serieIndex, horizontal, series, labels, ...rest}) => {
  const chartsItemList = serie.map((item, itemIndex) => {
    const props = {item, itemIndex, type, horizontal, serie, ...rest};

    return (
      <ChartsItem {...props}/>
    );
  });

  return (
    <div className={`Charts--serie ${type}`}
         key={serieIndex}
         style={{height: horizontal ? 'auto' : 250}}
    >
      <label>{horizontal ? series[serieIndex] : labels[serieIndex]}</label>
      {chartsItemList}
    </div>
  )
};

class Charts extends React.Component {
  state = {
    data: []
  };

  populateArray = () => {
    const
      series = this.props.series.length,
      serieLength = this.props.labels.length;

    const data = new Array(series)
      .fill(new Array(serieLength).fill(0))
      .map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({data});
  };

  componentDidMount() {
    this.populateArray();
    this.interval = setInterval(this.populateArray, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const
      {horizontal, ...rest} = this.props,
      {data} = this.state;

    const max = data.reduce((max, serie) =>
      Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    const chartSerieList = data.map((serie, serieIndex) => {
      const
        sortedSerie = serie.slice(0),
        sum = serie.reduce((carry, current) => carry + current, 0);

      sortedSerie.sort(compareNumbers);

      const props = {horizontal, serie, serieIndex, max, sortedSerie, sum, ...rest};

      return (
        <ChartsSerie {...props}/>
      );
    });

    return (
      <div className={`Charts ${horizontal && 'horizontal'}`}>
        {chartSerieList}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
    labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
    colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
  };

  render() {
    const {series, labels, colors} = this.state;

    const legendList = labels.map((label, labelIndex) => {
      return (
        <div>
          <span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}}/>
          <span className="Legend--label">{label}</span>
        </div>
      );
    });

    const props = {series, labels, colors};

    return (
      <section>
        <Charts {...props}/>
        <Charts {...props} type={'stacked'}/>
        <Charts {...props} type={'layered'}/>
        <Charts {...props} horizontal/>
        <div className="Legend">
          {legendList}
        </div>
      </section>
    );
  }
}
