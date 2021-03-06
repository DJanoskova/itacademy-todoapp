import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import moment from "moment";
import findIndex from "lodash/findIndex";

import axios from "./axios";

import AddTodo from "./views/AddTodo";
import TodoList from "./views/TodoList";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    const todos = await axios.get("/todos.json");
    const result = [];

    if (todos.data)
      Object.keys(todos.data).forEach(key => {
        const todo = todos.data[key];
        todo.id = key;
        result.push(todo);
      });

    this.setState({
      todos: result
    });
  }

  addTodo = async todo => {
    const newTodo = {
      ...todo,
      finished: false,
      createdAt: moment().format("DD.MM.YYYY")
    };
    const result = await axios.post("/todos.json", newTodo);
    newTodo.id = result.data.name;

    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(newTodo)
      };
    });
  };

  editTodo = (todo) => {
    const index = findIndex(this.state.todos, { id: todo.id })
    const todos = [...this.state.todos];
    todos.splice(index, 1, todo);
    this.setState({
      todos: todos
    });
  };

  removeTodo = (todo) => {
    const index = findIndex(this.state.todos, { id: todo.id })
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  };

  render() {
    const todos = this.state.todos;
    return (
      <HashRouter>
        <div className="App">
          <Navbar />

          <div className="p-3">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <TodoList
                  todos={todos}
                  onEdit={this.editTodo}
                  onRemove={this.removeTodo}
                />
              )}
            />
            <Route
              path="/add"
              render={() => <AddTodo onAdd={this.addTodo} />}
            />
          </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
