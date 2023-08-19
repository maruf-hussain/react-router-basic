import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
           <h2>usert detail hejkajlas jlkf lka</h2> 
           <h2>Name: {user.name}</h2>
           <p>{user.email}</p>  
           <p>{user.phone}</p>

        </div>
    );
};

export default UserDetails;