const cars = require('./cars');
const countries = require('./countries');

module.exports = {
    ...cars,
    ...countries
};
