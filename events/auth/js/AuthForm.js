'use strict';

class AuthForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  changeNameHandler = event => {
    this.setState({
      name: event.target.value
    })
  };

  changeEmailHandler = event => {
    const
      emailRule = /[^\w-@._]/gi,
      newEmail = event.target.value.replace(emailRule, '');

    this.setState({
      email: newEmail
    })
  };

  changePasswordHandler = event => {
    const
      passRule = /[^\w_]/gi,
      newPass = event.target.value.replace(passRule, '');

    this.setState({
      password: newPass
    })
  };

  submitHandler = event => {
    event.preventDefault();
    const {onAuth} = this.props;

    if (onAuth && typeof onAuth === 'function') {
      onAuth(this.state);
    }
  };

  render() {
    const {name, email, password} = this.state;

    return (
      <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={this.submitHandler}>
        <div className="Input">
          <input required type="text" placeholder="Имя" value={name} onChange={this.changeNameHandler}/>
          <label></label>
        </div>
        <div className="Input">
          <input type="email" placeholder="Электронная почта" value={email} onChange={this.changeEmailHandler}/>
          <label></label>
        </div>
        <div className="Input">
          <input required type="password" placeholder="Пароль" value={password} onChange={this.changePasswordHandler}/>
          <label></label>
        </div>
        <button type="submit">
          <span>Войти</span>
          <i className="fa fa-fw fa-chevron-right"></i>
        </button>
      </form>
    )
  }
}
