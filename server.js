const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hotel Booking API Running...');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
