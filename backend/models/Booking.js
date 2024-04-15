// models/Booking.js

const db = require('../config/db');

const createBookedCarsTable = `
    CREATE TABLE IF NOT EXISTS booked_cars (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        dealer_id INT,
        car_model VARCHAR(255) NOT NULL,
        car_price DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES registered_users(id),
        FOREIGN KEY (dealer_id) REFERENCES dealers(id)
    )
`;

db.query(createBookedCarsTable, (err, result) => {
    if(err) throw err;
    console.log('Booked cars table created or exists');
});

const bookCar = (userId, dealerId, carModel, carPrice, callback) => {
    const query = 'INSERT INTO booked_cars (user_id, dealer_id, car_model, car_price) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, dealerId, carModel, carPrice], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

module.exports = { bookCar };
