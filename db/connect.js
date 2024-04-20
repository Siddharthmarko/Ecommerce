const mysql = require('mysql');

/**
 *  Create Pool can store multiple query and execute those
 */
// const conn = mysql.createConnection({
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'user_db',
    password: '',
})
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database successfully');
});


module.exports = {conn};