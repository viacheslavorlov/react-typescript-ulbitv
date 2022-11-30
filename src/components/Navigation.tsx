import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Navigation: FC = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <NavLink style={{textAlign: "center", width: 200, border: "2px solid black"}} to="users">Users</NavLink>
            <NavLink style={{textAlign: "center", width: 200, border: "2px solid black"}} to="events">Events</NavLink>
            <NavLink style={{textAlign: "center", width: 200, border: "2px solid black"}} to="cards">Cards</NavLink>
            <NavLink style={{textAlign: "center", width: 200, border: "2px solid black"}} to="todo">Todo</NavLink>
        </div>
    );
};

export default Navigation;
