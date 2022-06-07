import React,{useState,useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { Context } from '../../context'
function AddPost() {
    let navigate=useNavigate()
    const {currentUser,posts,setPosts}=useContext(Context)
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(posts.length)
        const entry = {
            userId:1,
            id:posts.length+1,
            title,
            body

        }
        setPosts([...posts,entry]);
        console.log(posts[101])
        navigate("/posts")
    }
    return (
        <>
        <Form className='form' onSubmit={handlesubmit}>
            <Form.Group className="mb-2" >
                <Form.Control  required type="text" placeholder="Title" value={title} onChange={(e) => {
                    settitle(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicBody">
                <Form.Control required as="textarea" disabled={false} placeholder="Content" value={body} onChange={(e) => {
                    setbody(e.target.value)
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Post
            </Button>
        </Form>
        </>
    );
}

export default AddPost;