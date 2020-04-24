module.exports = {
    '/api/cars': {
        get: {
            security: [],
            summary: 'List Cars',
            responses: {
                200: {
                    description: 'table of cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    cars: {
                                        type: 'array',
                                        items: {$ref: '#/components/schemas/Car'},
                                        total: {type: 'integer'},
                                        limit: {type: 'integer'}
                                    }

                                }
                            }
                        }
                    },

                    default: {
                        description: 'Error',
                        content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                    }
                }
            }
        },
        post: {
            security: [],
            summary: 'Add New Car',
            responses: {
                200: {
                    description: 'Successful',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    type: 'array',
                                    items: {$ref: '#/components/schemas/Car'}

                                }
                                // total: {type: 'integer'},
                                // limit: {type: 'integer'}
                            }
                        }
                    }
                }
            }
        }
    },

    '/api/cars/{id}': {

        get: {
            security: [],
            summary: 'Find Car by id',
            description: 'returns a single car',
            parameters: [
                {
                    name: 'carId',
                    in: 'path',
                    description:'ID of car to return',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    }
                }
            ],
            responses: {
                200: {
                    description: 'Single car',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    type: 'array',

                                    items: {$ref: '#/components/schemas/Car'}

                                }

                                // total: {type: 'integer'},
                                // limit: {type: 'integer'}
                            }
                        }
                    }
                },

                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        put: {
            security: [],
            summary: 'List Cars',
            responses: {
                200: {
                    description: 'table of cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    type: 'array',
                                    items: {$ref: '#/components/schemas/Car'}

                                }

                                // total: {type: 'integer'},
                                // limit: {type: 'integer'}
                            }
                        }
                    }
                },

                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },

        delete: {
            security: [],
            summary: 'List Cars',
            responses: {
                200: {
                    description: 'table of cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    cars: {
                                        type: 'array',
                                        items: {$ref: '#/components/schemas/Car'}

                                    }
                                    // total: {type: 'integer'},
                                    // limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
