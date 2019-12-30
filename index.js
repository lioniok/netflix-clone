const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Home Page');
})

app.listen(3000);