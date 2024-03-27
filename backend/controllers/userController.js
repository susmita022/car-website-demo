const db = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { name, email, password, state, city } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        const query = 'INSERT INTO registered_users (name, email, password, state, city) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [name, email, hashedPassword, state, city], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error registering user' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const query = 'SELECT * FROM registered_users WHERE email = ?';
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error logging in' });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const user = results[0];
            const isMatch = await comparePassword(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
                expiresIn: '1h',
            });
            res.status(200).json({ token, message: 'Login Successful' });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerUser, loginUser };