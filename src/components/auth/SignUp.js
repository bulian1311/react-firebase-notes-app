import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="text-darken-5 grey-text">Регистрация</h5>
          <div className="input-field">
            <label htmlFor="email">Емейл</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">Имя</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Фамилия</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Регистрация
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
