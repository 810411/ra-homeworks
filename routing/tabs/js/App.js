const components = [
  {
    name: 'Рефераты',
    path: '/',
    component: Essay,
    id: 0
  },
  {
    name: 'Криэйтор',
    path: '/creator',
    component: Creator,
    id: 1
  },
  {
    name: 'Гадалка',
    path: '/fortune',
    component: Fortune,
    id: 2
  }
];

const exact = path => path.substring(-1) === '/';

const App = () => {
  const navList = components.map(({name, path, id}) => (
    <NavLink
      className="tabs__item"
      activeClassName='tabs__item-active'
      to={path}
      exact={exact(path)}
      key={id}>
      {name}
    </NavLink>
  ));

  const routeList = components.map(({component, path, id}) => (
    <Route
      path={path}
      component={component}
      exact={exact(path)}
      key={id}>
    </Route>
  ));

  return (
    <Router>
      <div className="tabs">
        <nav className="tabs__items">
          {navList}
        </nav>
        <div className="tabs__content">
          <Switch>
            {routeList}
          </Switch>
        </div>
      </div>
    </Router>
  )
};
