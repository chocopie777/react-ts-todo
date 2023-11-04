import React, {FC} from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;
    return (
        <div>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            <span style={{
                display: 'inline-block',
                margin: '0 10px'
            }}>{title}</span>
            <button style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'red'
            }} onClick={() => removeTodo(id)}>x
            </button>
        </div>
    );
};

export default TodoItem;