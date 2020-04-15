const cars = require('./cars');
const countries = require('./countries');

module.exports = {
    schemas: {
        cars,
        countries,
        Error: {
            type: 'object',
            required: [
                'code',
                'message'
            ],
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                message: { type: 'string' }
            }
        }
    },
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};

module.exports = {
    ...cars,
    ...countries
};
