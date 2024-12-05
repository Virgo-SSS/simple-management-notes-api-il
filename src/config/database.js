import mysql from 'mysql2';
import 'dotenv/config'

// Create a connection to the database
// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createPool({
    host: process.env.HOST || 'localhost',
    port: 3306,
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'ternakku_db',
});

export default db.promise();