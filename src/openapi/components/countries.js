module.exports = {
    type: 'object',
    properties: {
        code: {
            type: 'string',
            pattern: '^[A-Z]{2}$'
        },
        name: {type: 'string'}
    },

    deleted: {
        type: 'boolean',
        description: 'If the user its deleted from the current APP'
    },

    required: [
        'id',
        'name',
        'code',
        'deleted'
    ]

};
