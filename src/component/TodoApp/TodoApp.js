import React, { Component } from "react";
import "./TodoApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    index: -1,
  };
  handleInput = (event) => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };
  StoreItems = (event) => {
    event.preventDefault();
    const { input, items, index } = this.state;
    if (index !== -1) {
      const updated = [...items];
      updated[index] = input;
      this.setState({ items: updated, index: -1, input: "" });
    } else {
      this.setState({
        items: [...this.state.items, input],
        input: "",
      });
    }
  };
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };
  editItem = (key) => {
    const updatedItem = this.state.items[key];
    this.setState({ input: updatedItem, index: key });
  };
  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.StoreItems}>
          <h1>Todo List</h1>
          <input
            value={input}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter items!....."
          />
        </form>

        <ul>
          {items.map((data, index) => {
            return (
              <li key={index}>
                {" "}
                {data}
                <div className="icon-container">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="edit-icon"
                    onClick={() => this.editItem(index)}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="delete-icon"
                    onClick={() => this.deleteItem(index)}
                  />
                </div>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
