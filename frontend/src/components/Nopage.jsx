import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Nopage() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/');
    }

    return (
        <div className="page">
            <h1>Error 404: Page not found</h1>
            <Button variant="outline-success" onClick={handleSubmit}>Home</Button>
        </div>
    )
}

export default Nopage;