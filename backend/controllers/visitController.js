// controllers/visitController.js

const db = require('../config/db');
const emailUtils = require('../utils/emailUtils');

const bookShowroomVisit = async (req, res) => {
    const { dealerId, date, time } = req.body;
    const userId = req.user.userId;

    // Parse the provided date string to get the day of the week
    const visitDate = new Date(date);
    const dayOfWeek = visitDate.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Check if the day is Sunday (0) or the time is not between 11 am to 7 pm
    if (dayOfWeek === 0 || !(time >= '11:00' && time <= '19:00')) {
        return res.status(400).json({ error: 'Invalid date or time' });
    }

    try {
        const dealerQuery = 'SELECT * FROM dealers WHERE id = ?';
        db.query(dealerQuery, [dealerId], async (err, dealerResult) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error booking showroom visit' });
            }

            if (dealerResult.length === 0) {
                return res.status(404).json({ error: 'Dealer not found' });
            }

            const dealer = dealerResult[0];
            const userQuery = 'SELECT * FROM registered_users WHERE id = ?';
            db.query(userQuery, [userId], async (err, userResult) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error booking showroom visit' });
                }

                if (userResult.length === 0) {
                    return res.status(404).json({ error: 'User not found' });
                }

                const user = userResult[0];
                const insertQuery = 'INSERT INTO showroom_visitors (user_id, dealer_id, date, time) VALUES (?, ?, ?, ?)';
                db.query(insertQuery, [userId, dealerId, date, time], async (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Error booking showroom visit' });
                    }

                    // Send email to the user about the showroom visit
                    const emailContent = `Dear ${user.name}, \n\nYou have successfully booked a showroom visit at ${dealer.name} on ${date} at ${time}.`;
                    emailUtils.sendEmail(user.email, 'Showroom Visit Booking Confirmation', emailContent);

                    res.status(201).json({ message: 'Showroom visit booked successfully' });
                });
            });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { bookShowroomVisit };
