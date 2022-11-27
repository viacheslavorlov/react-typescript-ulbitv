import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodosItemProps {
    todo: ITodo
}

const UserListItem: FC<TodosItemProps> = ({todo}) => {
    return (
        <div style={{border: '1px solid black', borderRadius: "5px"}}>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}

        </div>
    );
};

export default UserListItem;