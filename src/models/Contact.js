const createModel = include('helpers/modelCreate');

const name = 'Contact';
const tableName = 'contact';

const selectableProps = [
    'first_name',
    'last_name',
    'job_title',
    'race',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class ContactModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new ContactModel({knex});
