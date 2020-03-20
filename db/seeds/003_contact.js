require('../../src/global');

const {Contact} = include('/models');
const contacts = require('./contacts.json');
exports.seed = async knex => {
    await knex(Contact.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(contacts.map(contact => Contact.insertOne(contact))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
