// models/ShowroomVisitor.js

const db = require('../config/db');

const createShowroomVisitorsTable = `
    CREATE TABLE IF NOT EXISTS showroom_visitors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        dealer_id INT,
        date DATE NOT NULL,
        time TIME NOT NULL,
        FOREIGN KEY (user_id) REFERENCES registered_users(id),
        FOREIGN KEY (dealer_id) REFERENCES dealers(id)
    )
`;

db.query(createShowroomVisitorsTable, (err, result) => {
    if(err) throw err;
    console.log('Showroom visitors table created or exists');
});

const bookShowroomVisit = (userId, dealerId, date, time, callback) => {
    const query = 'INSERT INTO showroom_visitors (user_id, dealer_id, date, time) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, dealerId, date, time], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

module.exports = { bookShowroomVisit };
