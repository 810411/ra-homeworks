'use strict';

const withTableFormatted = WrappedComponent => {
  return class extends React.Component {

    static get displayName() {
      const name = WrappedComponent.displayName ||
        WrappedComponent.name || 'Component';
      return `WithTableFormatted(${name})`;
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.list !== this.props.list
    }

    render() {
      return (
        <WrappedComponent {...this.props} list={this.formatList()}/>
      )
    }

    formatList() {
      const list = this.props.list;
      const currentYear = 2018; // (new Date()).getFullYear();
      const wrappedComponentName = WrappedComponent.name || WrappedComponent.displayName;

      if (wrappedComponentName === 'SortTable') {
        return list.sort((a, b) => b.amount - a.amount);

      } else if (wrappedComponentName === 'MonthTable') {
        return list
          .sort((a, b) =>
            new Date(a.date) - new Date(b.date))
          .reduce((result, {date, amount}) => {
            const itemDate = new Date(date);

            if (itemDate.getFullYear() === currentYear) {
              const
                month = itemDate.toLocaleString('en-US', {month: 'short'}),
                indexOfMonth = result.findIndex(el => el.month === month);

              if (indexOfMonth > -1) {
                result[indexOfMonth].amount += amount;
              } else {
                return [...result, {month, amount}];
              }
            }

            return result
          }, [])

      } else if (wrappedComponentName === 'YearTable') {
        return list
          .sort((a, b) =>
            new Date(a.date) - new Date(b.date))
          .reduce((result, {date, amount}) => {
            const
              year = (new Date(date)).getFullYear(),
              indexOfYear = result.findIndex(el => el.year === year);

            if (indexOfYear > -1) {
              result[indexOfYear].amount += amount;
            } else {
              return [...result, {year, amount}]
            }

            return result;
          }, [])
      }
    }
  }
};

const MonthTableFormatted = withTableFormatted(MonthTable);
const YearTableFormatted = withTableFormatted(YearTable);
const SortTableFormatted = withTableFormatted(SortTable);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <MonthTableFormatted list={this.state.list}/>
        <YearTableFormatted list={this.state.list}/>
        <SortTableFormatted list={this.state.list}/>
      </div>
    );
  }
}
