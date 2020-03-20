const createModel = include('helpers/modelCreate');

const name = 'Car';
const tableName = 'car';

const selectableProps = [
    'brand',
    'model',
    'year',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class CarModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new CarModel({knex});
