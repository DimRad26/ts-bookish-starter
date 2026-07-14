import express from 'express';
import 'dotenv/config';

var Connection = require('tedious').Connection;

const config = {
    server: process.env.SERVER_NAME,
    options: {
        database: process.env.DB_NAME,
        trustServerCertificate: true,
    },
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
    },
};

var connection = new Connection(config);

// Setup event handler when the connection is established.
connection.on('connect', function(err) {
    if(err) {
        console.log('Error: ', err)
    }
    // If no error, then good to go...
    console.log('Connected!');
});

// Initialize the connection.
connection.connect();

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';

const port = process.env['PORT'] || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

/**
 * Primary app routes.
 */
app.use('/healthcheck', healthcheckRoutes);
app.use('/books', bookRoutes);
