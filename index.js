const express = require('express');
const app = express();
const port = 7000;
const mysql = require('mysql2/promise');
const router = express.Router();

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todoventas'
};

app.use(express.json());

// Endpoint to get all products
router.get('/', async (req, res) => {
    res.sendFile(__dirname + '/templates/landing.html');
});


app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});