import React from 'react';
import { useHistory } from "react-router-dom";

export default function UserInfo() {
    const history = useHistory();

    const routeToEditUser = () => {
        history.pushState("/EditUser");
    };

    return (
        <div className='infoContainer'>
            <div className='info'>
                <h1>This is the user name</h1>
                <h3>User phone</h3>
            </div>
            <button onClick={routeToEditUser}>Edit</button>
        </div>
    );
};