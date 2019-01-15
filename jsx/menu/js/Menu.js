const Menu = ({ items, opened }) => {
  const liItems = items.map(({title, href}) => <li><a href={href}>{title}</a></li>);

  return (
    <div className={`menu ${opened && "menu-open"}`}>
      <div className="menu-toggle"><span></span></div>
      {opened && <nav><ul>{liItems}</ul></nav>}
    </div>
  )
};
