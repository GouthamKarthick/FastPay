import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {sendMoney} from './api';

function SendMoney() {
    useEffect(()=>{
        document.title="Send Money";
    })

    const {register, handleSubmit, formState:{errors}} = useForm();
    const [mesg, setMesg] = useState('');

    async function onSubmit(details) {
        const res = await sendMoney({...details, senderId:localStorage.getItem('userId')});
        try {
            setMesg('transaction done successfully');
        }
        catch (err) {
            setMesg('Transaction failed. Try again');
        }
    }

    return (
        <div className="page">
            <div><h1>Send Money</h1></div>
            <Container fluid className="login">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row} className="mb-1">
                        <Col xs={4} md={4}><Form.Label><h4>Email</h4></Form.Label></Col>
                        <Col xs={8} md={8}>
                            <Form.Control 
                                type="email"
                                placeholder="Enter e-mail"
                                {...register('receiverEmail', {required:true})} 
                            />
                            {errors.email && <p>Enter email</p>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-1">
                        <Col xs={4} md={4}><Form.Label><h4>Password</h4></Form.Label></Col>
                        <Col xs={8} md={8}>
                            <Form.Control 
                                type="number"
                                placeholder="Enter money"
                                {...register('amount', {required:true})} 
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

export default SendMoney;