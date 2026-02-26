const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bookings.db', (err) => {
    if (err) {
        console.error('เชื่อมต่อฐานข้อมูลไม่สำเร็จ:', err.message);
    } else {
        console.log('เชื่อมต่อฐานข้อมูลสำเร็จ');
        createTable();
    }
});

function createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullname TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            checkin TEXT NOT NULL,
            checkout TEXT NOT NULL,
            roomtype TEXT NOT NULL,
            guests INTEGER NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `;

    db.run(sql);
}

module.exports = db;
