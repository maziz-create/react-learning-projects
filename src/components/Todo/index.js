import { useState } from 'react'
import { } from './styles.css';
import Form from './Form';
import List from './List';

function Todo() {

    const [todos, setTodos] = useState([
        {
            name: "Todo 1",
            checked: false
        },
        {
            name: "Todo 2",
            checked: false
        },
        {
            name: "Todo 3",
            checked: false
        }
    ]);

    return (
        <div className="todo">
            <Form setTodo={setTodos} todos={todos} />
            <List todos={todos} />
        </div>
    )
}

export default Todo
