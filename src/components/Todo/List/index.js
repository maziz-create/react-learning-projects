import React from 'react'
import { useEffect } from 'react';

function List({ todos }) {

    const deleteTodo = (e) => {
        let li = e.target.parentNode;
        li.remove();
    }

    const completeTodo = (e) => {
        let li = e.target.parentNode;
        li.classList.add('completed-todo');
    }

    const deleteMark = (e) => {
        let li = e.target.parentNode;
        li.classList.remove('completed-todo');
    }

    useEffect(() => {
        console.log("todos state değişti");
    }, [todos])


    return (
        <div id="container">
            <ul>
                {
                    todos.map((todo, index) => {
                        return <div key={index} className="liDiv">
                            <li>
                                {todo.name}
                                <button className="button-complete" onClick={
                                    completeTodo
                                }>
                                    V
                                </button>
                                <button className="button-deleteMark" onClick={
                                    deleteMark

                                }>
                                    O
                                </button>
                                <button className="button-delete" onClick={
                                    deleteTodo
                                }>
                                    X
                                </button>
                            </li>
                        </div>

                    })
                }
            </ul>
        </div>
    )
}

export default List
