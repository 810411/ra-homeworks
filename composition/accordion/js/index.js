'use strict';

class Section extends React.Component {
  state = {
    open: false
  };

  componentDidMount() {
    this.setState({
      open: this.props.open
    })
  }

  handleButtonClick = event => {
    event.preventDefault();
    const newOpen = !this.state.open;

    this.setState({
      open: newOpen
    })
  };

  render() {
    const
      {open} = this.state,
      {title, children} = this.props;

    return (
      <section className={`section ${open && 'open'}`}>
        <button>toggle</button>
        <h3 className="sectionhead" onClick={this.handleButtonClick}>{title}</h3>
        <div className="articlewrap">
          <div className="article">{children}</div>
        </div>
      </section>
    )
  }
}

const Accordian = ({title, children}) => {
  return (
    <main className="main">
      <h2 className="title">{title}</h2>
      {children}
    </main>
  )
};

ReactDOM.render(
  <Accordian title="React">
    <Section open title="Компоненты">
      Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим
      состоянием, а
      композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается
      иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход
      позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
    </Section>
    <Section title="Выучил раз, используй везде!">
      После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке
      мобильных приложений с использованием React Native.
    </Section>
    <Section title="Использование JSX">
      JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код
      в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
    </Section>
  </Accordian>,
  document.getElementById('accordian')
);
