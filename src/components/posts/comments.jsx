import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context'
import { Form, Button, Modal } from 'react-bootstrap'

function Comments({ iterator, comments }) {
    const { currentUser, setComments } = useContext(Context);
    const [commentbody, setCommentBody] = useState("")
    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="link" onClick={handleShow}>
              edit
            </Button>
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit Comment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form className='form' onSubmit={editComment}>
            <Form.Group className="mb-2" >
                <Form.Label>Title</Form.Label>
                <Form.Control value={iterator.body}
                    onChange={(e) => {
                        console.log("helloo")
                        setCommentBody(e.target.value)
                        
                    }}
                 />
                </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
      <Example />;
      const deleteComment = () => {
        setComments(comments.filter((e) => {
            return e !== iterator.body;
      
          }))
        let record = [...comments];
        setComments(record);
    };

    const editComment = (e) => {
        e.preventDefault();
        let entry=[...comments]
        entry[iterator]={
            userId:currentUser[0].id,
            id:iterator.id,
            email: iterator.email, 
            body: commentbody

        }
        setComments(entry)
    }
    return (
        <div className='container'>
            {console.log(comments)}
            <p>{comments.length > 0 ? <>
                    <h6>Author:</h6>  {iterator.email}
                    <h6>Comment:</h6>  {iterator.body}
                    {currentUser[0].email === iterator.email ? <>
                        
                        <Button className='m-1' variant='link' onSubmit={deleteComment} >Delete</Button>
                       <Example/>
                    </> : <>
                        {""}
                    </>}
                    {console.log(currentUser[0].email)}


            </> : <>
                <h1>No comments</h1>
            </>}</p>
        </div>
    );
}

export default Comments;