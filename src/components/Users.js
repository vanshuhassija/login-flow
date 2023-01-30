import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//If a user comes to this route then he must be logged In

const Users = () => {
    const navigate=useNavigate()
    const [users,setUsers]=useState([])
    useEffect(()=>{
        if(!localStorage.getItem("login-token")){
            navigate("/login");
        }
        else{
            fetch('https://fakestoreapi.com/users?limit=5')
            .then(res=>res.json())
            .then(json=>setUsers(json))
        }
    },[])
    return (
        <div>
            <h1>Users List Will Be Shown Here</h1>
        </div>
    );
};

export default Users;