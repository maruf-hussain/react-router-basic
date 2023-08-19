import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayUser from '../components/DisplayUser/User';

const Users = () => {
   const users =  useLoaderData();
    return (
        <div>
   
    <h2>{users.length}</h2>
    <div>
        {
            users.map(user => <DisplayUser
            key={user.id}
            user={user}
            
            ></DisplayUser>)
        }
    </div>
    

        </div>
    );
};

export default Users;