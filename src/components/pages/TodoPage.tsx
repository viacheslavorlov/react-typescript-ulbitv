import React, {useEffect, useState} from 'react';
import List from "../List";
import {ITodo} from "../../types/types";
import TodoItem from "../TodoItem";
import axios from "axios";

const TodoPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    async function fetcTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetcTodos();
    }, []);
    return (
        <div>
            <List items={todos}
                  renderItem={
                      (todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
};

export default TodoPage;
