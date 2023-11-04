import React, {ChangeEvent, ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useRef, useState} from 'react';
import {ITodo} from "../types/data";
import TodoList from "./TodoList";

const App: FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }]);
            setValue('');
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            } else {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
        }))
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    ref={inputRef}
                    onKeyDown={handleKeyDown}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default App;