const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    receiver: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }, // Make sure this is an ObjectId
    amount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;