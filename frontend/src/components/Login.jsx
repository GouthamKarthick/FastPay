import React, {useState} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { login } from "./api";
import { useNavigate } from "react-router-dom";

function Login() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [mesg, setMesg] = useState('');
    const navigate = useNavigate();

    async function onSubmit(details) {
        try {
            const res = await login(details);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.id)
            navigate('/');
        }
        catch (err) {
            setMesg('Login details are invalid');
        }
    }

    return (
        <div className='page'>
            <div>
                <h1>Login</h1>
            </div>
            <Container fluid className="login">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row} className="mb-1">
                        <Col xs={4} md={4}><Form.Label><h4>Email</h4></Form.Label></Col>
                        <Col xs={8} md={8}>
                            <Form.Control 
                                type="email"
                                placeholder="Enter e-mail"
                                {...register('email', {required:true})} 
                            />
                            {errors.email && <p>Enter email</p>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Col xs={4} md={4}><Form.Label><h4>Password</h4></Form.Label></Col>
                        <Col xs={8} md={8}>
                            <Form.Control 
                                type="password"
                                placeholder="Enter password"
                                {...register('password', {required:true})} 
                            />
                            {errors.password && <p>Enter password</p>}
                        </Col>
                    </Form.Group>
                    <Button type="submit" variant="outline-primary" >Submit</Button>
                </Form>
                {mesg && <p>{mesg}</p>}
            </Container>
        </div>
    )
}

export default Login;