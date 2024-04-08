// controllers/interestController.js

const db = require('../config/db');
const createInterestedBuyers = require('../models/Interestbuyer')

const registerInterest = async (req, res) => {
    const { name, email, city, state, carModel } = req.body;

    try {
        const query = 'INSERT INTO interested_buyers (name, email, city, state, car_model) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [name, email, city, state, carModel], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error registering interest' });
            }
            res.status(201).json({ message: 'Interest registered successfully' });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerInterest };
