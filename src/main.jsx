import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './User/Users';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetaisl/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/users/',
        element: <Users></Users>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'user/:userId',
        element: <UserDetails></UserDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        
      },

      {
        path: 'posts',
        element: <Posts></Posts>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts')
        
      },

      {
        path: 'post/:postId',
        element: <PostDetails></PostDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
