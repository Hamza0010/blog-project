import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from '../../context'

function AllPost({ post }) {
    const { currentUser, posts, setPosts } = useContext(Context);
    let navigate = useNavigate();

    const viewPost = () => {
        navigate(`/post/${post.id}`);
    };

    const deletePost = () => {
        const indexOfObject = posts.findIndex((object) => {
            return object.id === post.id;
        });
        let record = [...posts];
        record.splice(indexOfObject, 1);
        setPosts(record);
    };

    const editPost = () => {
        navigate(`/post/edit/${post.id}`)
    };

    return (
        <>
            <div className="container"><h4>{post.title}</h4>
                <p>{post.body}</p>

                <Button onClick={viewPost}>View</Button>|
                {currentUser.length > 0 && post.userId === currentUser[0].id ? <>
                    <Button onClick={deletePost}>Delete</Button>|
                    <Button onClick={editPost}>Edit</Button>
                </> : <></>}
            </div>
        </>

    );
}

export default AllPost;
