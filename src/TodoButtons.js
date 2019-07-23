import React, { Component } from 'react';

class TodoButtons extends Component {
  render () {
    const { finished } = this.props.todo;
    let finishButton;
    if (!finished) {
      finishButton = (
        <button type="button" className="btn btn-success float-right">
          Dokončiť
        </button>
      )
    }

    return (
      <>
        <button type="button" className="btn btn-light">
          Zmazať
        </button>
        {finishButton}
      </>
    )
  }
}

export default TodoButtons;
