const Sequelize = require('sequelize');
const config = require('../config/db.config');
const User = require('./models/user');

const {
    host, username, password, port, dialect,
} = config();

const db = new Sequelize(dialect, username, password, {
    host,
    port,
    dialect,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

db.authenticate()
    .then(() => {
        console.log('Successfully connected to the database!');
        return db.sync({ force: true });
    })
    .then(() => {
        console.log('Successfully synced schemas!');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });

module.exports = db;
