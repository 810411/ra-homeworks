'use strict';

const colorList = {
  'unisex': 'black',
  'male': 'blue',
  'female': 'orange'
};

const Catalog = ({items, children}) => {
  return (
    <main>
      {children(items)}
    </main>
  )
};

const App = ({items}) => {
  return (
    <Catalog items={items}>
      {items => items.map(item =>
        <Item color={colorList[item.type]} item={item}/>
      )}
    </Catalog>
  )
};
