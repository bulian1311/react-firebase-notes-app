import React, { Component } from 'react';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
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
          <h5 className="text-darken-5 grey-text">Новый проект</h5>
          <div className="input-field">
            <label htmlFor="title">Заголовок</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Контент</label>
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Создать</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
