const express = require('express');
require('dotenv').config();
require('./models/db');
const router = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('server is running at port 3000');
});