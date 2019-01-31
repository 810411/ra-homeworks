'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

const birthdayPropType = (props, propName, componentName) => {
  let birthday = props[propName];
  let isBirthday = (typeof birthday === 'string') && /^\d{4}-\d{2}-\d{2}$/.test(birthday);
  if (!isBirthday) {
    return new Error(`Invalid format ${propName} in ${componentName}. Expected:"YYYY-MM-DD". Supplied: "${props[propName]}"`);
  }
};

const defaultDate = () => {
  const
    date = new Date(),
    [day, month, year] = date.toLocaleDateString('en-GB').split('/');

  return `${year}-${month}-${day}`
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,

  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: birthdayPropType,
  required: PropTypes.bool,
};


DateInput.defaultProps = {
  value: defaultDate()
};
