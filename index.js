const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./router/userRoute.js');

app.use(express.static('public'));
app.use(cors());
app.use(route);
app.use(route);
app.listen(3000, () => {
    console.log('server is running');
});