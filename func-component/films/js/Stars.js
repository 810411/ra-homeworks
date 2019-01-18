'use strict';

const Stars = ({count}) => {
  const
    condition = typeof count === 'number' && count > 0 && count < 6,
    stars = condition && Array.from(new Array(count), (_ => <li><Star/></li>));

  return <ul className="card-body-stars u-clearfix">{stars}</ul>
};
