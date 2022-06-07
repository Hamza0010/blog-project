import React, { useState, useEffect,useContext } from "react";
import { Button } from 'react-bootstrap';
import { Context } from "../../context";
import Comments from "./comments";

function Addcomment({ postid }) {

    const {currentUser} = useContext(Context);
    const url =
        "https://jsonplaceholder.typicode.com/posts/" + postid + "/comments";
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, [url]);

    const addComment = () => {
        let record = [...comments];
        record.push({
            postId: postid,
            id: record.length+1,
            name:currentUser[0].name,
            email: currentUser[0].email,
            body: comment,
        });
        setComments(record);
        setComment("")
    };
    return (
        <div>
            {currentUser.length>0?<>
                <textarea
                className="comment_text_area"
                placeholder="Post a Comment"
                value={comment}
                onChange={(e) => {
                    setComment(e.target.value);
                    
                }}
            ></textarea>
             <Button className="btn-danger" onClick={addComment}>Add Comment</Button>
            </>:<></>}
            
           
            {comments.length > 0 ? (
                <>
                <h2>Comments</h2>
                    {comments.map((iterator, index) => {
                        return (
                            <div className="container">
                            <Comments
                                key={index}
                                iterator={iterator}
                                setcomments={setComments}
                                comments={comments}
                            /></div>
                        );
                    })}
                </>
            ) : (
                <>
                    <h1>No comments </h1>
                </>
            )}
        </div>
    );
}

export default Addcomment;
