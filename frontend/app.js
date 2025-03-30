var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';
const URL = process.env.BACKEND_URL || 'http://3.7.254.105:8000/api';


const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function (req, res) {
    try {
        const options = { method: 'GET' };
        const response = await fetch(URL, options);
        const data = await response.json();

        console.log(data); // Log response for debugging
        res.render('index', { data }); // Ensure `data` is passed as an object
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
