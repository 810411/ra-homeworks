'use strict';

const withDateTimePretty = WrappedComponent => props => {

  const formatDate = () => {
    const
      publicationDate = new Date(props.date),
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
  };

  return (
    <WrappedComponent {...props} date={formatDate()}/>
  )
};

const DateTime = props => {
  return (
    <p className="date">{props.date}</p>
  )
};

const DateTimePretty = withDateTimePretty(DateTime);
