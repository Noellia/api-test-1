const Country = require('./countries');

const Car = require('./cars');

module.exports = {
    schemas: {
        Country,
        Car,
        Profile: {
            type: 'object',
            properties: {
                id: {
                    description: 'id of country',
                    type: 'string',
                    format: 'uuid'
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                code: {
                    description: 'Code.',
                    type: 'string'
                },
                deleted: {
                    type: 'boolean',
                    description: 'If the user its deleted from the current APP'
                }
            },
            required: [
                'id',
                'name',
                'code',
                'deleted'
            ]
        }
    }
};
