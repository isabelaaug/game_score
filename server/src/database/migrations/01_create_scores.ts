import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('scores', table => {
        table.increments('id').primary();
        table.integer('max_score').notNullable();
        table.integer('min_score').notNullable();

        table.integer('match_id')
            .notNullable()
            .references('id')
            .inTable('matchs')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('scores');
}