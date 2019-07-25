import React, { Component } from 'react';
import axios from './axios';

class TodoButtons extends Component {
  handleFinish = async () => {
      await axios.patch('/todos/' + this.props.todo.id + '.json', {
        finished: true
      })
  }

  render () {
    const { finished } = this.props.todo;
    let finishButton;
    if (!finished) {
      finishButton = (
        <button type="button" className="btn btn-success float-right" onClick={this.handleFinish}>
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
