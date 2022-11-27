import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserListItem from "./UserListItem";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {


    return (
        <div>
            {users.map(user => {
                return <UserListItem  key={user.id} user={user}/>
            })}
            
        </div>
    );
};

export default UserList;
