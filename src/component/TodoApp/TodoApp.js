import React, { Component } from 'react'
import './TodoApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
                        return < li key={index} > {data}<div className='icon-container'><FontAwesomeIcon icon={faPen} className="edit-icon" />
                            <FontAwesomeIcon icon={faTrashCan} className="delete-icon" onClick={() => this.deleteItem(index)} /></div> </li>
                    })}

                </ul >

            </div >
        )
    }
}
