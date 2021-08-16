import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({}); 
    const [comments, setComments] = useState([]);

    useEffect( ()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then (res => res.json())
        .then (data => setPost(data));
    }, [id])

    useEffect( ()=>{
        const url =`https://jsonplaceholder.typicode.com/comments/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [id])
    return (
        <div>
            <h3> This is Post Details : {id}</h3>
            <p>User Posted : {post.id}</p> 
            <p>Post Title:   {post.title}</p> 
            <p>Post Body : {post.body}</p> 
            <p>No. of Comments: {comments.length}</p>
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;