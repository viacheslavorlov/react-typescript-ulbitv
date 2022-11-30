import React from 'react';
import EventsExample from "./components/pages/EventsExample";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cards from "./components/pages/Cards";
import UserPage from "./components/pages/UserPage";
import TodoPage from "./components/pages/TodoPage";
import Layout from "./components/Layout";
import UserIDPage from "./components/pages/UserIDPage";
import TodoIDPage from "./components/pages/TodoIDPage";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="events" element={<EventsExample/>}/>
                        <Route path="cards" element={<Cards/>}/>
                        <Route path="users" element={<UserPage/>}/>
                        <Route path="users/:id" element={<UserIDPage/>}/>
                        <Route path="todo" element={<TodoPage/>}/>
                        <Route path="todo/:id" element={<TodoIDPage/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
