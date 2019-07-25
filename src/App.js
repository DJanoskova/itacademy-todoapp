import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount () {
    const todos = await axios.get('https://todo-app-course.firebaseio.com/todos.json')
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
    axios.post('https://todo-app-course.firebaseio.com/todos.json', newTodo);
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
