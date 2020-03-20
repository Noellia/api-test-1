exports.up = function(knex) {
    return knex.schema
        .createTable('contact', function (table) {
            table.string('id');
            table.string('first_name');
            table.string('last_name');
            table.string('job_title');
            table.string('race');
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('contacts');
};
