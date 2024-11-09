const Transaction = require('../models/Transaction');
const User = require('../models/User');

const sendMoney = async (req, res) => {
    const { senderId, receiverEmail, amount } = req.body;
    console.log(receiverEmail);

    if (!senderId || !receiverEmail || !amount) {
        return res.status(400).json({ message: 'Sender ID, Receiver ID, and Amount are required' });
    }

    try {
        const sender = await User.findById(senderId);
        const receiver = await User.findOne({email:receiverEmail});
        console.log(receiver);
        const id = receiver._id;
        if (!sender || !receiver) {
            return res.status(400).json({ message: 'Invalid sender or receiver ID' });
        }

        if (sender.balance < amount) 
            return res.status(400).json({message:'Insufficient balance'})

        sender.balance -= amount
        receiver.balance += amount
        await sender.save();
        await receiver.save();

        const transaction = new Transaction({ sender: senderId, receiver: id, amount });
        await transaction.save();

        res.status(201).json({ message: 'Transaction done successfully', transaction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getTransactions = async (req, res) => {
    const { userId } = req.params;

    try {
        const transactions = await Transaction.find({ 
            $or: [{ sender: userId }, { receiver: userId } ] 
        });
        console.log(transactions);
        const user = User.findById({userId});
        if (user && !transactions)
            return res.status(200).json({message:'No transactions has been done by user'})
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve transactions' });
    }
};

module.exports = { sendMoney, getTransactions };