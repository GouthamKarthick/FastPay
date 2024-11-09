import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { register_ }  from "./api";
import { useNavigate } from 'react-router-dom';

function Register() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    async function onSubmit(details) {
        await register_(details);
        navigate('/login');
    }

    return (
        <div className='page'>
            <div>
                <h1>Register</h1>
            </div>
            <Container fluid className="login">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row} className="mb-1">
                        <Col xs={4} md={4}><Form.Label><h4>Name</h4></Form.Label></Col>
                        <Col xs={8} md={8}>
                            <Form.Control 
                                type="text"
                                placeholder="Enter name"
                                {...register('name', {required:true})} 
                            />
                            {errors.name && <p>Enter name</p>}
                        </Col>
                    </Form.Group>
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
                    <Form.Group as={Row} className="mb-1">
                        <Col xs={4} md={4}><Form.Label><h4>Balance</h4></Form.Label></Col>
                        <Col xs={8} md={8}>
                            <Form.Control 
                                type="number"
                                placeholder="Enter initial balance"
                                {...register('balance', {required:true})} 
                            />
                            {errors.balance && <p>Enter balance</p>}
                        </Col>
                    </Form.Group>
                    <Button type="submit" variant="outline-primary" >Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register;