const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;

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

    find({
        skip, filter = {}
    }) {
        const results = this.knex.select()
            .from(this.tableName)
            .where(filter)
            .limit(PAGE_SIZE).offset(toNumber(PAGE_SIZE) * toNumber(skip));

        return results;
    }
}

module.exports = knex => new ContactModel({knex});
