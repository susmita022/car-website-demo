// controllers/bookingController.js

const db = require('../config/db');
const emailUtils = require('../utils/emailUtils');

const ebookCar = async (req, res) => {
    const { dealerName, carModel } = req.body;
    const userId = req.user.id;

    try {
        // Fetch user information by id
        const userQuery = 'SELECT * FROM registered_users WHERE id = ?';
        db.query(userQuery, [userId], async (err, userResult) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error e-booking car' });
            }

            if (userResult.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const user = userResult[0];

            // Fetch dealer information by name
            const dealerQuery = 'SELECT * FROM dealers WHERE name = ?';
            db.query(dealerQuery, [dealerName], async (err, dealerResult) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error e-booking car' });
                }

                if (dealerResult.length === 0) {
                    return res.status(404).json({ error: 'Dealer not found' });
                }

                const dealer = dealerResult[0];

                // Fetch car information by model
                const carQuery = 'SELECT * FROM cars_info WHERE model = ?';
                db.query(carQuery, [carModel], async (err, carResult) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Error e-booking car' });
                    }

                    if (carResult.length === 0) {
                        return res.status(404).json({ error: 'Car not found' });
                    }

                    const car = carResult[0];

                    // Insert booking details into booked_cars table
                    const insertQuery = 'INSERT INTO booked_cars (user_id, dealer_id, car_model, car_price) VALUES (?, ?, ?, ?)';
                    db.query(insertQuery, [userId, dealer.id, car.model, car.price], async (err, result) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).json({ error: 'Error e-booking car' });
                        }

                        // Send email to the user about the e-booking details
                        const emailContent = `Dear ${user.name}, \n\nYou have successfully e-booked a car.\n\nDealer: ${dealer.name}, ${dealer.address}\nCar Model: ${car.model}\nPrice: ${car.price}`;
                        emailUtils.sendEmail(user.email, 'Car E-Booking Confirmation', emailContent);

                        res.status(201).json({ message: 'Car e-booked successfully' });
                    });
                });
            });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { ebookCar };
