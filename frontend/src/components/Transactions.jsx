import React, { useEffect, useState } from "react";
import { getTransactions } from "./api";

function Transcations() {
    const [transaction, setTransaction] = useState([]);
    const [mesg, setMesg] = useState('');

    useEffect(()=> {
        document.title="Transactions";
        const userId = localStorage.getItem('userId');
        async function fetchData() {
            try {
                const res = await getTransactions(userId);
                setTransaction(res.data);
            }
            catch (err) {
                setMesg('Failed to load');
            }
        }
        fetchData();
    }, [transaction, mesg])

    return (
        <div className="page">
            <h2>Transactions History</h2>
            {transaction && 
                <div>
                    {transaction.map((item) => {
                        const date = new Date(Date.parse(item.createdAt));
                        return (
                            <div id={item.id} className="display">
                                <div><h6>Sender Id</h6></div>
                                <div><h6>{item.sender}</h6></div>
                                <div><h6>Received Id</h6></div>
                                <div><h6>{item.receiver}</h6></div>
                                <div><h6>Amount</h6></div>
                                <div><h6>{item.amount}</h6></div>
                                <div><h6>Transaction Date</h6></div>
                                <div><h6>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h6></div>
                                <div><h6>Transaction Time</h6></div>
                                <div><h6>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</h6></div>
                            </div>
                        )
                })}
                </div>
            }
            {mesg && <p>{mesg}</p>}
        </div>
    )
}

export default Transcations;