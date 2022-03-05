import React from 'react';

import './todo-add.css';

class TodoAdd extends React.Component {
    state = {
        label: ''
    }

    onAdd = (event) => {
        event.preventDefault()
        this.props.onTodoAdd(this.state.label)
        this.state.label = '';
    }

    render() {
        return (
            <form className="todo-add-form" onSubmit={this.onAdd}>
                <input className="todo-add-input" type='text'
                value={this.state.label} 
                onChange={(event) => this.setState({label: event.target.value})} />
                <input className="todo-add-submit" type='submit' value='add' />
            </form>
        )
    }
}

export default TodoAdd;