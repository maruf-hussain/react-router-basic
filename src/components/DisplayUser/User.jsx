import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
  const {name, email,phone,id} = user;
    return (

        <div>
        <h2>{user.name}</h2>  
        <h3>{user.email}</h3>  
        <h3>{user.phone}</h3>
        <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;