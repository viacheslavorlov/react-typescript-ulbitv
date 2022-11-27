import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserListItem from "./components/UserListItem";
import TodoItem from "./components/TodoItem";


function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetcTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUsers();
        fetcTodos();
    }, []);

    return (
        <div className="App">
            <Card onClick={(num) => console.log(num)} width={'200px'} height={'200px'} variant={CardVariant.outlined}>
                <button>Click!</button>
                <div>Content</div>

            </Card>
            <List items={users}
                  renderItem={
                      (user: IUser) => <UserListItem user={user} key={user.id}/>}/>
            <List items={todos}
                  renderItem={
                      (todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
}

export default App;
