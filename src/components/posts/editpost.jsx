import React,{useState,useEffect,useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import {useNavigate,useParams} from 'react-router-dom';
import { Context } from '../../context'
function EditPost() {
    let navigate=useNavigate()
    const param=useParams()
    const {currentUser,posts,setPosts}=useContext(Context)
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [postId,setPostId]=useState(param.postid)
    const [index,setIndex]=useState()

    const editPost=(e)=>{
        e.preventDefault();
        let entry=[...posts]
        entry[index]={
            userId:currentUser[0].id,
            id:postId,
            title, 
            body

        }
        setPosts(entry)
        navigate("/posts")
    }

    const getpost=()=>{
     const indexOfObject = posts.findIndex((object) => {
            return object.id == param.postid;
        });
        
     setTitle(posts[indexOfObject].title)
     setBody(posts[indexOfObject].body)
     setPostId(posts[indexOfObject].id)
     setIndex(indexOfObject )
     console.log(index);
    }
    useEffect(() => {
        getpost()
    
      return () => {
        getpost()
      }
    }, [])
    

    return (
        <>
        <Form className='form' onSubmit={editPost}>
            <Form.Group className="mb-2" >
                <Form.Label>Title</Form.Label>
                <Form.Control  required type="text" placeholder="Title" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Content </Form.Label>
                <Form.Control required as="textarea"  placeholder="Content" value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Update Post
            </Button>
        </Form>
        </>
    );
}

export default EditPost;