import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title, id} = post;

    return (
        <div>
            <p>{post.title}</p>
            <Link to={`/post/${id}`}><button>Show Detais</button></Link>
         
        </div>
    );
};

export default Post;