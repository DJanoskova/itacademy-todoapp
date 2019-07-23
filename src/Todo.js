import React, { Component } from "react";

import TodoButtons from './TodoButtons';

class Todo extends Component {
  renderText = () => {
    const { children } = this.props;
    if (!children) return null;
    return (
      <p className="card-text">
        {children}
      </p>
    )
  };

  render() {
    const { createdAt, title, finished } = this.props;
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
            <TodoButtons todo={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
