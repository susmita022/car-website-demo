const db = require('../config/db');

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS registered_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    state VARCHAR(255),
    city VARCHAR(255)
  )
`;

db.query(createUsersTable, (err, result) => {
  if (err) throw err;
  console.log('Users table created or already exists');
});

module.exports = db;