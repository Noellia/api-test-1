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
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'string',
                                                    format: 'uuid'
                                                },
                                                brand: {type: 'string'},
                                                model: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
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
                                    cars: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'string',
                                                    format: 'uuid'
                                                },
                                                brand: {type: 'string'},
                                                model: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
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
        },

        post: {
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
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'string',
                                                    format: 'uuid'
                                                },
                                                brand: {type: 'string'},
                                                model: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
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
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'string',
                                                    format: 'uuid'
                                                },
                                                brand: {type: 'string'},
                                                model: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
