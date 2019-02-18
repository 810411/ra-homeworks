'use strict';

const withDateTimePretty = WrappedComponent => {
  return class extends React.Component {

    static get displayName() {
      const name = WrappedComponent.displayName ||
        WrappedComponent.name || 'Component';
      return `WithDateTimePretty(${name})`;
    }

    render() {
      return (
        <WrappedComponent {...this.props} date={this.formatDate()}/>
      )
    }

    formatDate() {
      const
        publicationDate = new Date(this.props.date),
        msecPassed = Date.now() - publicationDate,
        msecInMinute = 1000 * 60,
        msecInHour = msecInMinute * 60,
        msecInDay = msecInHour * 24;

      const result = (value, name) =>
        `${(msecPassed / value).toFixed()} ${name} назад`;

      if (msecPassed < msecInHour) {
        return result(msecInMinute, 'минут')

      } else if (msecPassed < msecInDay) {
        return result(msecInHour, 'часов')

      } else {
        return result(msecInDay, 'дней')
      }
    }
  }
};

const DateTime = props => {
  return (
    <p className="date">{props.date}</p>
  )
};

const DateTimePretty = withDateTimePretty(DateTime);
