const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./router/userRoute.js');

dotenv.config();
app.use(express.static('public'));
app.use(cors());
app.use(route);


app.listen(process.env.PORT, () => {
    console.log('server is running');
});

