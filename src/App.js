import React, { Component } from 'react';
import moment from 'moment';
import axios from './axios';

import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount () {
    const todos = await axios.get('/todos.json')
    const result = [];

    if (todos.data) Object.keys(todos.data).forEach(key => {
      const todo = todos.data[key];
      todo.id = key;
      result.push(todo)
    })

    this.setState({
      todos: result
    })
  }

  addTodo = async todo => {
    const newTodo = {
      ...todo,
      finished: false,
      createdAt: moment().format('DD.MM.YYYY')
    }
    // @TODO consistent with presentation
    const result = await axios.post('/todos.json', newTodo);
    newTodo.id = result.data.name;

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
            <Todo todo={todoData} key={todoData.id} />
          )
        })}
      </div>
    );
  }
}

export default App;
