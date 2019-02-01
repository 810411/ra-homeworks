const items = [
  {
    name: 'Главная',
    path: '/',
    id: 0
  },
  {
    name: 'Дрифт-такси',
    path: '/drift',
    id: 1
  },
  {
    name: 'Time Attack',
    path: '/timeattack',
    id: 2
  },
  {
    name: 'Forza Karting',
    path: '/forza',
    id: 3
  },
];

const MenuItem = ({name, path}) => {
  const exact = path.substr(-1) === '/';

  return (
    <NavLink
      className="menu__item"
      activeClassName="menu__item-active"
      to={path}
      exact={exact}>
      {name}
    </NavLink>
  )
};

const Menu = () => {
  const menuItemsList = items.map(({name, path, id}) =>
    <MenuItem name={name} path={path} key={id}/>);

  return (
    <nav className="menu">
      {menuItemsList}
    </nav>
  )
};
