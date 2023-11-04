import React, {FC} from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
    const {items, removeTodo, toggleTodo} = props;
    return (
        <div>
            {items.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;