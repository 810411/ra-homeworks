class Site extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ids: [],
    };

    this.generate = this.generate.bind(this);
  }

  componentDidMount() {
    this.generate();
  }

  render() {
    return (
      <div className="row">
        <header className="info col-sm-12">
          <h1>Генератор случайных идентификаторов</h1>
        </header>
        <aside className="menu col-sm-12 col-md-4">
          <button className="button" onClick={this.generate}>Получить новый идентификатор</button>
        </aside>
        <main className="ids col-sm-12 col-md-8">
          <ul>
            {this.state.ids.map(id => <li key={id}>{id}</li>)}
          </ul>
        </main>
      </div>
    );
  }

  generate() {
    const newId = makeid(random(5, 43, false));
    const newIdLength = newId.length;

    alertify.log(`Новый ID: ${newIdLength} ${declOfNum(newIdLength)}`, null, 3000);

    this.setState(prevState => ({
      ids: [...prevState.ids, newId],
    }));
  }
}

const makeid = (length = 12) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const random = (lower = 0, upper = 1, floating = true) => floating
  ? Math.min(lower + (Math.random() * (upper - lower)), upper)
  : lower + Math.floor(Math.random() * (upper - lower + 1));

const declOfNum = (number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ['символ', 'символа', 'символов']

  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
};
