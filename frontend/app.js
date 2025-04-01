var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api' || 'http://13.203.197.13:8000/api' || 'http://13.201.224.97:8000/api';
// const URL = process.env.BACKEND_URL || 'http://13.201.224.97:8000/api';
// const URL = process.env.BACKEND_URL || 'http://13.203.197.13:8000/api';


const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function (req, res) {
    const options = {
        method: 'GET',
    };
    fetch(URL, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(URL, options);
        response = await response.json();
        res.render('index', response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});