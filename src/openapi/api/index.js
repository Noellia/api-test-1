const cars = require('./cars');
const countries = require('./countries');
const contacts = require('./contacts');

module.exports = {
    ...cars,
    ...contacts,
    ...countries
};
