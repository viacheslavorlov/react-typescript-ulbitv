import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserListItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{border: '1px solid black', borderRadius: "5px"}}>
            {user.id}. {user.name}
            <div>Адрес: {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</div>
        </div>
    );
};

export default UserListItem;
