import React, { useState, useEffect } from "react";
import axios from "axios";


export default function InstituteSettings() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="row">
            <h3>User List:</h3>
            {users.map(user => (
                <div key={user.id} className="col-sm-3">
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    );
}