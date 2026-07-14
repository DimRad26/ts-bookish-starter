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

export var connection = new Connection(config);

// Setup event handler when the connection is established.
connection.on('connect', function(err) {
    if(err) {
        console.log('Error: ', err)
    }
    // If no error, then good to go...
    console.log('Connected!');
});