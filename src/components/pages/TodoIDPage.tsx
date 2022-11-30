import React, {useEffect, useState} from 'react';
import {ITodo} from "../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const TodoIDPage = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);

    async function fetchUser() {
        try {
            const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }

    const clickHandler = () => {
        navigate('/todo')
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div>
            <h1>{todo?.title}<input type="checkbox" checked={todo?.completed}/></h1>

            <button onClick={clickHandler}>Back</button>
        </div>
    );
};

export default TodoIDPage;
