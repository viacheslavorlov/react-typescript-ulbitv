import React, {FC} from 'react';
import {IUser} from "../types/types";
import {Link} from "react-router-dom";

interface UserItemProps {
    user: IUser
}

const UserListItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{border: '1px solid black', borderRadius: "5px"}}>
            <Link to={`${user.id}`}>{user.id}. {user.name}</Link>
            <div>Адрес: {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</div>
        </div>
    );
};

export default UserListItem;
