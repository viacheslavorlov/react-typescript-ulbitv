import React, {useEffect, useState} from 'react';
import List from "../List";
import {IUser} from "../../types/types";
import UserListItem from "../UserListItem";
import axios from "axios";

const UserPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <List items={users}
                  renderItem={
                      (user: IUser) => <UserListItem user={user} key={user.id}/>}/>
        </div>
    );
};

export default UserPage;
