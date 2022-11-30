import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import {Link} from "react-router-dom";

interface TodosItemProps {
    todo: ITodo
}

const TodoListItem: FC<TodosItemProps> = ({todo}) => {
    const [done, setDone] = useState<boolean>(todo.completed);

    const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked = !done;
        setDone(!done);

    }
    useEffect(() => {

    }, [done])

    return (
        <div
            style={{border: '1px solid black', borderRadius: "5px"}}>
            <input type="checkbox" checked={done} onChange={changeEvent}/>
            <Link to={`${todo.id}`}>{todo.id}. {todo.title}</Link>
        </div>
    );
};

export default TodoListItem;