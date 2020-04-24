module.exports = {
    type: 'object',
    properties: {
        id: {
            description: 'id of contact',
            type: 'string',
            format: 'uuid'
        },
        first_name: {
            description: 'First_name.',
            type: 'string'
        },
        last_name: {
            description: 'Last_name.',
            type: 'string'
        },
        job_title: {
            description: 'Job_title.',
            type: 'string'
        },
        race: {
            description: 'Race.',
            type: 'string'
        },
        deleted: {
            type: 'boolean',
            description: 'If the user its deleted from the current APP'
        }
    },
    required: [
        'id',
        'first_name',
        'last_name',
        'job_title',
        'race',
        'deleted'
    ]
};
