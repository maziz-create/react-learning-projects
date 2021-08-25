import React from 'react'
import { } from './styles.css';
import { Form } from './Form';
import { List } from './List';

function Todo() {
    return (
        <div className="todo">
            <List />
            <Form />
        </div>
    )
}

export default Todo
