import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Context } from '../../context';
import AllPost from './allpost';
import './style.css'

function Posts() {
    const navigate = useNavigate()
    const { currentUser, posts } = useContext(Context)
    console.log(posts)
    const handleclick = () => {
        navigate("/addpost")
    }

    return (
        <div>
            {currentUser.length > 0 ? <>
                <div className='addpostbtn'>
                    <Button variant="link" onClick={handleclick} >
                        Add Post
                    </Button>
                </div>
            </> : <></>}

            {posts.length > 0 ? <>
                {posts.map((post, index) => {
                    return <AllPost key={index} post={post} />
                })}
            </> : <>
                <h1>No posts are avialable</h1>
            </>}

        </div>
    );
}

export default Posts;