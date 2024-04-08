// models/TestDrive.js

const db = require('../config/db');

const createTestDrivesTable = `
    CREATE TABLE IF NOT EXISTS test_drives (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        dealer_id INT,
        date DATE NOT NULL,
        time TIME NOT NULL,
        car_model VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES registered_users(id),
        FOREIGN KEY (dealer_id) REFERENCES dealers(id)
    )
`;

db.query(createTestDrivesTable, (err, result) => {
    if (err) throw err;
    console.log('Test drives table created or exists');
});

const scheduleTestDrive = (userId, dealerId, date, time, carModel, callback) => {
    const query = 'INSERT INTO test_drives (user_id, dealer_id, date, time, car_model) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [userId, dealerId, date, time, carModel], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

module.exports = { scheduleTestDrive };
