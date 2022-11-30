import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {IUser} from "../../types/types";

const UserIDPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    const clickHandler = () => {
        navigate('/users')
    }

    useEffect(() => {
        fetchUser();
    }, [])


    return (
        <div>
            <h1>{user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address?.city}</div>
            <div>{user?.company?.name}</div>
            <button onClick={clickHandler}>Back</button>
        </div>
    );
};

export default UserIDPage;
