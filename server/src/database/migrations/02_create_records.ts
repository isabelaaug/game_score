import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('records', table => {
        table.increments('id').primary();
        table.integer('max_record').notNullable();
        table.integer('min_record').notNullable();

        table.integer('score_id')
            .notNullable()
            .references('id')
            .inTable('scores')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('records');
}