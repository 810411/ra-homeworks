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
      const wrappedComponentName = WrappedComponent.name || WrappedComponent.displayName;

      if (wrappedComponentName === 'SortTable') {
        return list.sort((a, b) => b.amount - a.amount);

      } else if (wrappedComponentName === 'MonthTable') {
        return this.formatListByDateItem(list, 'month')

      } else if (wrappedComponentName === 'YearTable') {
        return this.formatListByDateItem(list, 'year')
      }
    }

    formatListByDateItem(list, dateItem) {
      const currentYear = 2018; // (new Date()).getFullYear();

      return list
        .sort((a, b) =>
          new Date(a.date) - new Date(b.date))
        .reduce((result, {date, amount}) => {
          const dateFromList = new Date(date);

          let dateItemValue;

          if (dateItem === 'month') {
            dateItemValue = dateFromList.toLocaleString('en-US', {[dateItem]: 'short'});
          } else if (dateItem === 'year') {
            dateItemValue = (new Date(date)).getFullYear()
          }

          if ((dateItem === 'month' && dateFromList.getFullYear() === currentYear) || dateItem === 'year') {
            const indexOfDateItemValue = result.findIndex(el => el[dateItem] === dateItemValue);

            if (indexOfDateItemValue > -1) {
              result[indexOfDateItemValue].amount += amount;
            } else {
              return [...result, {[dateItem]: dateItemValue, amount}];
            }
          }

          return result
        }, [])
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
