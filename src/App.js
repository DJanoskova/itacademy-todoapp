import React, { Component } from 'react';
import moment from 'moment';

import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Todo 1',
        createdAt: '26.05.2019',
        finished: false,
        text: 'text 1'
      },
      {
        title: 'Todo 2',
        createdAt: '25.05.2019',
        finished: true,
        text: `
        <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        </ul>
        `
      }
    ]
  }

  addTodo = todo => {
    const newTodo = {
      ...todo,
      finished: false,
      createdAt: moment().format('DD.MM.YYYY')
    }
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(newTodo)
      }
    })
  }

  render () {
    const todos = this.state.todos;
    return (
      <div className="App p-3">
        <AddTodo onAdd={this.addTodo} />
        <hr />
        {todos.map(todoData => {
          return (
            <Todo todo={todoData} />
          )
        })}
      </div>
    );
  }
}

export default App;
