import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
    text: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      title: '',
      text: ''
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Title"
          required
        />
        <textarea
          name="text"
          value={text}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Text"
        />

        <button
          type="submit"
          className="btn btn-outline-success"
          disabled={!title}
        >
          Save
        </button>
      </form>
    );
  }
}

export default AddTodo;
