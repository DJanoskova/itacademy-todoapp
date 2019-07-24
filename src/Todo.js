import React, { Component } from "react";

import TodoButtons from './TodoButtons';

class Todo extends Component {
  renderText = () => {
    const { text } = this.props;
    if (!text) return null;
    return (
      <div className="card-text">
        {text}
      </div>
    )
  };

  render() {
    const { createdAt, title, finished } = this.props.todo;
    let classes = 'card';
    if (finished) classes += ' border-success';

    return (
      <div className="todo mb-2">
        <div className={classes}>
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <h6 className="card-subtitle text-muted mb-2">
              Created at {createdAt}
            </h6>
            {this.renderText()}
            <TodoButtons todo={this.props.todo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
