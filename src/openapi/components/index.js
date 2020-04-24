const Country = require('./countries');
const Car = require('./cars');
const Contact = require('./contacts');
module.exports = {
    schemas: {
        Car,
        Contact,
        Country,
        Profile: {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                    nullable: true
                },
                success: {
                    type: 'boolean',
                    nullable: true
                },
                user: {
                    allOf: [{ $ref: '#/components/schemas/User' }],
                    type: 'object',
                    required: [
                        'roles'
                    ],
                    properties: {
                        role: {
                            type: 'array',
                            items: { type: 'string' }
                        },
                        attributes: { type: 'object' }
                    }
                }
            }
        },
        User: {
            type: 'object',
            properties: {}
        },
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
