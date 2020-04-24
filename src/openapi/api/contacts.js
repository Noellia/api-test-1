module.exports = {
    '/api/contacts': {
        get: {
            security: [],
            summary: 'List of Contacts',
            parameters: [
                {
                    in: 'query',
                    name: 'first_name',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{10}$'
                    },
                    description: 'Name of user to get'
                }, {
                    in: 'query',
                    name: 'skip',
                    schema: {
                        type: 'integer',
                        default: 0
                    },
                    description: 'Numeric ID of user to get'
                }
            ],

            responses: {
                200: {
                    description: 'table of contacts',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    contacts: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Contact' }
                                        // total: { type: 'integer' },
                                        // limit: { type: 'integer' }
                                    }
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }

            }
        }
    },
    '/api/contacts/{id}': {
        put: {
            security: [],
            summary: 'List of contacts',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    description: 'Name of contact '
                }
            ],
            requestBody: {
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Contact' } } },
                required: true
            },
            responses: {
                200: {
                    description: 'list of contacts',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {items: { $ref: '#/components/schemas/Contact' }}

                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },

        delete: {
            security: [],
            summary: 'List of contacts',
            responses: {
                200: {
                    description: 'table of contacts',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    contacts: {
                                        type: 'object',
                                        items: {$ref: '#/components/schemas/Contact' }
                                    },

                                    total: { type: 'integer' },
                                    limit: { type: 'integer' }
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        }

    }
};
