import React, { Component } from 'react'
import './TodoApp.css';
export default class TodoApp extends Component {
    state = {
        input: "", items: [],

    }
    handleInput = (event) => { this.setState({ input: event.target.value }); console.log(this.state.input); };
    StoreItems = (event) => {
        event.preventDefault();
        const { input } = this.state;
        this.setState({
            items: [...this.state.items, input], input: ""
        });
    }; deleteItem = (key) => {
        this.setState({ items: this.state.items.filter((data, index) => index !== key) });
    }
    render() {
        const { input, items } = this.state
        return (

            <div className='todo-container'>
                <form className='input-section' onSubmit={this.StoreItems}><h1>Todo List</h1><input value={input} onChange={this.handleInput} type='text' placeholder='Enter items!.....' />
                </form>

                <ul>
                    {items.map((data, index) => {
                        return < li key={index} > {data}<i class="fa-solid fa-pen"></i><i class="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)} ></i> </li>
                    })}

                </ul >

            </div >
        )
    }
}
