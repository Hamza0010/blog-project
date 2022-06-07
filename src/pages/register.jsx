import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from "../context";

function Register() {
    const {users, setUsers} = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        let newarr = [...users]
        newarr.push({
            id:users.length+1,
            name,
            email,
            password
        })
        setUsers(newarr);
        console.log(users)
        navigate("/users")
    }
   
    return (
        <>
        <h1 className='loginText'>Register</h1>
        <Form className='form' onSubmit={handlesubmit}>
            <Form.Group className="mb-3" >
                <Form.Control  required type="text" placeholder="Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control required type="email" placeholder="Email Address" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Register
            </Button>
        </Form>
        </>
    );
    
}

export default Register;