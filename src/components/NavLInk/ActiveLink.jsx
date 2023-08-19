import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLInk.css'

const ActiveLink = ({to, children}) => {
    return (
        <nav>
             <NavLink
                    to={to}
                       
                        className={({ isActive}) => isActive ? 'active'  : ""}>
                        {children} 
                        </NavLink>
                      
                        
                  
        </nav>
    );
};

export default ActiveLink;