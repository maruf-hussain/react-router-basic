
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
     navigate(-1)
    };

    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;