import React, { useEffect } from "react";
import {Button, Navbar, NavItem, Nav} from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router-dom';
import './App.css'

function Navigator() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    function onSubmit(event) {
        navigate(`./${event.target.id}`)
    }

    useEffect(()=>{
        document.title="FastPay"
    })

    return (
        <>
            <Navbar collapseOnSelect expand='sm' className="bg-body-tertiary">
                <Navbar.Brand onClick={onSubmit}><h3>FastPay</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">    
                        <NavItem><NavLink to='/'>Home</NavLink></NavItem>
                        <NavItem><NavLink to='/send-money'>Send</NavLink></NavItem>
                        <NavItem><NavLink to='/transactions'>Transcations</NavLink></NavItem>
                    </Nav>
                    {!userId && <Nav>
                        <Button sm={2} variant="outline-primary" id='register' onClick={onSubmit}>Register</Button>
                        <Button variant="primary" id='login' onClick={onSubmit}>Login</Button>
                    </Nav>}
                    {userId && <Nav>
                        <Button xs={1} variant="primary" id="login" onClick={(e) => {localStorage.clear(); navigate('/login')}}>Log out</Button>
                    </Nav>}
                </Navbar.Collapse>
                
            </Navbar>
        </>
    )
}

export default Navigator;