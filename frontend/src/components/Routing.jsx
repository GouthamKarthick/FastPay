import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigator from "./Navigator";
import Home from "./Home";
import Nopage from './Nopage'
import Login from './Login';
import Register from './Register';
import SendMoney from "./SendMoney";
import Transactions from './Transactions';

function Routing() {
    return (
        <Router>
            <Navigator />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/send-money' element={<SendMoney />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='*' element={<Nopage />} />
            </Routes>
        </Router>
    )
}

export default Routing;